const Wrld = require("wrld.js")
const env = require("./env")

const keys = {
    google: env.GOOGLE_KEY,
    wrld: env.WRLD_KEY,
}

const story = require("./story")
const tracks = require("./tracks")

window.addEventListener("load", async () => {
    // const address = encodeURIComponent("empire state building, new york")
    // const endpoint = "https://maps.googleapis.com/maps/api/geocode/json?key=" + keys.google + "&address=" + address
    //
    // console.log(endpoint)
    //
    // const response = await fetch(endpoint)
    // const lookup = await response.json()
    //
    // console.log(lookup)
    //
    // const { lat, lng } = lookup.results[0].geometry.location

    const { lat, lng, zoom, color, seconds } = story[0]

    const map = Wrld.map("map", keys.wrld, {
        center: [lat, lng],
        zoom,
    })

    map.on("initialstreamingcomplete", () => {
        highlightBuildingAt(lat, lng, color)

        if (story.length > 1) {
            setTimeout(() => showNextEvent(1), seconds * 1000)
        }
    })

    let highlight = null

    const highlightBuildingAt = (lat, lng, color) => {
        if (highlight) {
            highlight.remove()
        }

        highlight = Wrld.buildings
            .buildingHighlight(
                Wrld.buildings
                    .buildingHighlightOptions()
                    .highlightBuildingAtLocation([lat, lng])
                    .color(color),
            )
            .addTo(map)
    }

    const showNextEvent = index => {
        const { lat, lng, zoom, degrees, color, seconds } = story[index]

        map.setView([lat, lng], zoom, {
            headingDegrees: degrees,
            animate: true,
            durationSeconds: 2.5,
        })

        setTimeout(() => {
            highlightBuildingAt(lat, lng, color)

            if (story.length > index + 1) {
                setTimeout(() => showNextEvent(index + 1), seconds * 1000)
            }
        }, 2.5 * 1000)
    }

    const nextTrack = () => {
        const index = Math.floor(Math.random() * tracks.length)

        const audio = new Audio(document.querySelector(tracks[index]).src)
        audio.addEventListener("ended", () => nextTrack())
        audio.play()
    }

    nextTrack()
})
