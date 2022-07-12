//Imports
import {
    playerContainer,
    video,
    playBtn,
    prevBtn,
    nextBtn,
    progressContainer,
    volumeContainer,
    volumeIcon,
    playerSpeed,
    fullscreenBtn
} from './utils/selectedElements.js'
import {toggleFullscreen} from './utils/fullscreen.js';
import {loadVideo, playVideo, prevVideo, nextVideo} from './utils/loadVideo.js'
import {changeSpeed, toggleMute, changeVolume} from './utils/videoControls.js'
import {setProgressBar, updateProgressBar} from './utils/videoProgress.js'


//EventListeners
window.addEventListener('DOMContentLoaded', loadVideo)
window.addEventListener('click', (e) => {
    if (e.target !== playBtn && e.target.parentElement !== playerContainer) {
        return
    }
    playVideo()
})
prevBtn.addEventListener('click', prevVideo)
nextBtn.addEventListener('click', nextVideo)
progressContainer.addEventListener('click', setProgressBar)
video.addEventListener('timeupdate', updateProgressBar)
video.addEventListener('ended', nextVideo)
volumeContainer.addEventListener('click', changeVolume)
volumeIcon.addEventListener('click', toggleMute)
playerSpeed.addEventListener('change', changeSpeed)
fullscreenBtn.addEventListener('click', toggleFullscreen)