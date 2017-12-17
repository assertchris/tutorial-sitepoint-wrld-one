const Wrld = require("wrld.js")
const env = require("./env")

const keys = {
    google: env.GOOGLE_KEY,
    wrld: env.WRLD_KEY,
}

window.addEventListener("load", async () => {
    const address = encodeURIComponent("empire state building, new york")
    const endpoint = "https://maps.googleapis.com/maps/api/geocode/json?key=" + keys.google + "&address=" + address

    // console.log(endpoint)

    const response = await fetch(endpoint)
    const json = await response.json()

    // console.log(json)

    const { lat, lng } = json.results[0].geometry.location

    const map = Wrld.map("map", keys.wrld, {
        center: [lat, lng],
        zoom: 15,
    })
})
