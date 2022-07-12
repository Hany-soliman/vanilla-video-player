//update progressbar, time and duration
import {ret, timeFormat} from "./timeFormater.js";
import {progressBar, progressContainer, timeElapsed, video, videoDuration} from "./selectedElements.js";

const updateProgressBar = (e) => {
    const {currentTime, duration} = e.target
    timeFormat(duration)
    Number.isNaN(duration) ? videoDuration.textContent = '/ 0:00' : videoDuration.textContent = `/ ${ret}`
    timeFormat(currentTime)
    timeElapsed.textContent = ret
    const progressPercent = (currentTime / duration) * 100
    progressBar.style.width = `${progressPercent}%`

}

//Seek function
const setProgressBar = (e) => {
    const width = progressContainer.offsetWidth
    const clickX = e.offsetX
    const progressPercent = (clickX / width) * 100
    progressBar.style.width = `${progressPercent}%`
    video.currentTime = (clickX / width) * video.duration
}


export {setProgressBar, updateProgressBar}
