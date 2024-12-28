const $ = document;

let musicPlayers = $.querySelectorAll(".fa-play")
let audios = $.querySelectorAll("audio")

let musicName;

musicPlayers.forEach(function (player) {
    player.addEventListener("click", function (e) {
        // get name of song
        musicName = e.target.dataset.name;

        // find matches audio to song name
        audios.forEach(function (audio) {
            if (audio.dataset.name === musicName) {
                audio.play()
            } else {
                audio.pause()
            }
        })

    })
})

