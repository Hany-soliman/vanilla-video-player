// View in fullscreen
import {playerContainer, video} from "./selectedElements.js";

const exitHandler = ()=> {
    if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        video.classList.remove('video-fullscreen');
    }
}

if (document.addEventListener) {
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
}



const openFullscreen= (element) => {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        /* Firefox */
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        /* IE/Edge */
        element.msRequestFullscreen();
    }
    video.classList.add('video-fullscreen');
}

// Close fullscreen
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
    }
    video.classList.remove('video-fullscreen');
}


// Toggle fullscreen
function toggleFullscreen() {
    if (window.innerWidth !== screen.width) {
        openFullscreen(playerContainer);
    } else {
        closeFullscreen();
    }
}


export {toggleFullscreen}