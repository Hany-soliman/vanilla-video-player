//Selectors
const playerContainer = document.getElementById('player-container')
const loader = document.getElementById('loader')
const video = document.querySelector('video')
const playBtn = document.getElementById('play-btn')
const prevBtn = document.getElementById('back-btn')
const nextBtn = document.getElementById('next-btn')
const videoDuration = document.querySelector('.time-duration')
const timeElapsed = document.querySelector('.time-elapsed')
const progressContainer = document.querySelector('.progress-range')
const progressBar = document.querySelector('.progress-bar')
const volumeContainer = document.querySelector('.volume-range')
const volumeBar = document.querySelector('.volume-bar')
const volumeIcon = document.getElementById('volume-icon')
const playerSpeed = document.getElementById('player-speed')
const fullscreenBtn = document.querySelector('.fullscreen')

export {playerContainer, loader, video, playBtn, prevBtn, nextBtn, videoDuration, timeElapsed, progressContainer, progressBar, volumeContainer, volumeBar, volumeIcon, playerSpeed, fullscreenBtn}