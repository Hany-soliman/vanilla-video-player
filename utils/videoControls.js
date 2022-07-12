//Volume control function
import {playerSpeed, video, volumeBar, volumeContainer, volumeIcon} from "./selectedElements.js";

const changeVolume = (e) => {
    video.muted = false
    const width = volumeContainer.offsetWidth
    const clickX = e.offsetX
    const volumePercent = (clickX / width) * 100
    volumeBar.style.width = `${volumePercent}%`
    video.volume = (clickX / width)
    checkVolumeRange()
}

//Check volume range
const checkVolumeRange = () => {
    volumeIcon.classList = ''
    if (video.volume > 0.70) {
        volumeIcon.classList.add('fas', 'fa-volume-up')
    }
    if (video.volume < 0.70 && video.volume > 0) {
        volumeIcon.classList.add('fas', 'fa-volume-down')
    }
    if (video.volume === 0) {
        volumeIcon.classList.add('fas', 'fa-volume-off')
    }
}

//Mute handling
const toggleMute = () => {
    if (volumeIcon.classList.contains('fa-volume-up') || volumeIcon.classList.contains('fa-volume-down') || volumeIcon.classList.contains('fa-volume-off')) {
        volumeIcon.classList = ''
        volumeIcon.classList.add('fas', 'fa-volume-mute')
        video.muted = true
        volumeIcon.title = 'Unmute'
        volumeBar.style.width = `${0}%`

    } else if (volumeIcon.classList.contains('fa-volume-mute')) {
        video.muted = false
        volumeIcon.title = 'Mute'
        checkVolumeRange()
        volumeBar.style.width = `${video.volume * 100}%`
    }
}

//Change video playback speed
const changeSpeed = () => {
    video.playbackRate = playerSpeed.value
}

export {changeSpeed, toggleMute, checkVolumeRange, changeVolume}