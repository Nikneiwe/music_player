const body = document.body
const player = document.querySelector('.player')
const playerHeader = player.querySelector('.player__header')
const playerControls = player.querySelector('.player__controls')
const slider = player.querySelector('.slider')
const sliderContext = player.querySelector('.slider__context')
const playlistButton = player.querySelector('.playlist')
const playerPlaylist = player.querySelectorAll('.player__song')
const playerSongs = player.querySelectorAll('.audio')
const playButton = player.querySelector('.play')
const nextButton = player.querySelector('.next')
const backButton = player.querySelector('.back')
const playIcon = playButton.querySelector("img[alt='play-icon']")
const pauseIcon = playButton.querySelector("img[alt='pause-icon']")
const sliderContent = slider.querySelector('.slider__content')
const sliderName = sliderContext.querySelector('.slider__name')
const sliderTitle = sliderContext.querySelector('.slider__title')
const sliderContentLength =  playerPlaylist.length -1
const progres = player.querySelector('.progres')
const progresFilled = progres.querySelector('.progres__filled')
let sliderWidth = 100
let count = 0
let song = playerSongs[count]
let isPlay = false
let isMove = false
function openPlayer(){
    playerHeader.classList.add('open-header')
    playerControls.classList.add('move')
    slider.classList.add('open-slider')
}
function closePlayer(){
    playerHeader.classList.remove('open-header')
    playerControls.classList.remove('move')
    slider.classList.remove('open-slider')
}
sliderContext.addEventListener('click', openPlayer)
playlistButton.addEventListener('click', closePlayer)
function slide(){

}
function durationSongs(){
    let min = parseInt(this.duration / 60)
    
    if(min < 10){
        min = '0' + min
    }
    let sec = parseInt(this.duration % 60)
    if(sec < 10){
        sec = '0' + sec
    }
    let playerSongTime = `${min}:${sec}`
    this.closest('.player__song').querySelector('.player__song-time').append(playerSongTime)
}
function playSong(){
    if(song.paused){
        song.play()
        playIcon.style.display = 'none'
        pauseIcon.style.display = 'block'
    }else{
        song.pause()
        isPlay = false
        playIcon.style.display = ''
        pauseIcon.style.display = ''
    }
}
function progresUpdate(){
    const progresFilledWidth = (this.currentTime / this.duration) * 100 + '%'
    progresFilled.style.width = progresFilledWidth
}
playerSongs.forEach(song =>{
    song.addEventListener('loadeddata', durationSongs)
})
playButton.addEventListener('click', ()=>{
    isPlay = true
    playSong()
})
song.addEventListener('timeupdate', progresUpdate)
progres.addEventListener('pointerdown', (e) =>{
    scurb(e)
    isMove = true
})