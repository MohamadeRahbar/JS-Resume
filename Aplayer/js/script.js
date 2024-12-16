const $ = document;


const image = $.querySelector("#cover");
const title = $.getElementById("title");
const artist = $.getElementById("artist");
const music = $.querySelector("audio");
const currentTimeEl = $.getElementById("current-time");
const durationEl = $.getElementById("duration");
const progress = $.getElementById("progress");
const progressContainer = $.getElementById("progress-container");
const prevBtn = $.getElementById("prev");
const playBtn = $.getElementById("play");
const nextBtn = $.getElementById("next");
const background = $.getElementById("background");

// Music
const songs = [

  {
    path: "media/Avengement.mp3",
    displayName: "Avengement Movie Song",
    artist: "Me Mum",
    cover:
      "https://i1.sndcdn.com/artworks-CKmwCoBGir0hBrF8-fXRvwg-t500x500.jpg",
  },
  {
    path: "media/DEUTSCHLAND.mp3",
    displayName: "Deutschland",
    artist: "Rammstein",
    cover: "https://i1.sndcdn.com/artworks-Cp2sFkPg5KARzCR3-boyCZQ-t500x500.jpg",
  },
  {
    path:
      "media/MyLastBreath.mp3",
    displayName: "My Last Breath | 2003",
    artist: "Evanescence",
    cover:
      "https://i1.sndcdn.com/artworks-u8vihZqZNAF5-0-t500x500.jpg",
  },
  {
    path:
      "media/PlayingByHeart.mp3",
    displayName: "Yanni 2003 Music",
    artist: "Yanni",
    cover:
      "https://i1.sndcdn.com/artworks-000006913509-3s2gk3-t500x500.jpg",
  },
  {
    path:
      "media/Tuesday.mp3",
    displayName: "Tuesday 2016",
    artist: "Burak Yeter",
    cover:
      "https://i1.sndcdn.com/artworks-ZZuCiTRkkXvO-0-t500x500.jpg",
  }


];

// Check if Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Play or Pause Event Listener
playBtn.addEventListener("click", function () {
  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = song.path;
  changeCover(song.cover);
}

function changeCover(cover) {
  image.classList.remove("active");
  setTimeout(() => {
    image.src = cover;
    image.classList.add("active");
  }, 100);
  background.src = cover;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex === 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const duration = e.srcElement.duration;
    const currentTime = e.srcElement.currentTime;

    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = progressPercent + "%";

    // Get Duration Per Min & Sec
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);

    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }

    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = durationMinutes + ":" + durationSeconds;
    }

    // Calculate display for currentTime
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    currentTimeEl.textContent = currentMinutes + ":" + currentSeconds;
  }
}

// Set Progress Bar
function setProgressBar(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = music.duration;
  music.currentTime = (clickX / width) * duration;
}

// Event Listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("ended", nextSong);
music.addEventListener("timeupdate", updateProgressBar);
progressContainer.addEventListener("click", setProgressBar);
