//LoadVideo
import {loader, playBtn, video} from "./selectedElements.js";
import {videos} from "./videos.js";

//Global
let i = 0


//Load video
const loadVideo = () => {
    loader.classList.remove('hide')
    video.src = videos[i].link
    video.onloadeddata = () => {
        loader.classList.add('hide')
    }
}


//Change video/button states
const elementState = (state) => {
    if (state === 'play') {
        video.play()
        playBtn.classList.replace('fa-play', 'fa-pause')
        playBtn.title = 'Pause'
    }
    if (state === 'pause') {
        video.pause()
        playBtn.classList.replace('fa-pause', 'fa-play')
        playBtn.title = 'Play'
    }
}


//Play/pause video
const playVideo = () => {
    video.paused ? elementState('play') : elementState('pause')

}

//next/prev videos
const prevVideo = () => {
    i--
    if (i < 0) {
        i = videos.length - 1
    }
    loadVideo()
    playVideo()
}

const nextVideo = () => {
    i++
    if (i > videos.length - 1) {
        i = 0
    }
    loadVideo()
    playVideo()
}

export {loadVideo, playVideo, prevVideo, nextVideo, elementState}