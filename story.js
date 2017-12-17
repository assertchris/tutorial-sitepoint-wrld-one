const Wrld = require("wrld.js")

module.exports = [
    {
        // start at Empire State Building
        lat: 40.7484405,
        lng: -73.98566439999999,
        zoom: 15,
        seconds: 5,
        image: ".jack-1",
        text:
            "<div>What a lovely day. I think I'm going to enjoy this Christmas vacation. First stop, the <em>Empire State Building</em>. Wow, look at all the snow-covered buildings.</div><strong>*cell rings*</strong>",
        color: [125, 255, 125, 128],
        time: Wrld.themes.time.Dawn,
    },
    {
        // stay in the same place but update story
        lat: 40.7484405,
        lng: -73.98566439999999,
        zoom: 15.5,
        degrees: 375,
        seconds: 5,
        image: ".chloe-1",
        text:
            "<div>Jack, it's <em>Chloe</em>. You asked me to let you know when there was an emergency, and well...</div><div>There is an emergency. You've forgotten to get a present for <em>Kim</em>.</div><div>All the stores are code red!</div>",
        color: [255, 125, 125, 128],
    },
    {
        // Jack asks where he can get the toy
        lat: 40.7484405,
        lng: -73.98566439999999,
        zoom: 15.5,
        degrees: 370,
        seconds: 5,
        image: ".jack-1",
        text:
            "<div>Dammit, <em>Chloe</em>!</div><div>If I don't get her a gift she'll move out again.</div><div>I forgot, last year, and I'm still helping her unpack boxes from the last apartment.</div><div>Tell me where I can get her a...<em>karaoke machine</em>!",
        color: [125, 255, 125, 128],
    },
    {
        // Chloe sends Jack to the first location
        lat: 40.7484405,
        lng: -73.98566439999999,
        zoom: 15.5,
        degrees: 375,
        seconds: 5,
        image: ".chloe-1",
        text:
            "<div>I'm sending the coordinates to your cell, now.</div><div>And, Jack. Be careful. It's a nightmare out there.</div>",
        color: [255, 125, 125, 128],
    },
    {
        // Jack goes to a toy store, 2 miles away
        lat: 40.7360199,
        lng: -74.0083345,
        zoom: 17,
        degrees: 300,
        seconds: 5,
        image: ".jack-1",
        text:
            "<div>Everybody get down!</div><div><strong>*frantic shuffling*</strong></div><div>I wanna know where to get the <em>karaoke machine</em> and I wanna know now!</div>",
        color: [125, 255, 125, 128],
        time: Wrld.themes.time.Day,
    },
]
