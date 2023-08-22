console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = document.getElementsByClassName();
let songs = [
    {songName: "salam-e-Ishq", filePath: "songs/1.mp3", coverpath: "covers/1.jpg"},
    {songName: "salam-e-Ishq", filePath: "songs/2.mp3", coverpath: "covers/2.jpg"},
    {songName: "salam-e-Ishq", filePath: "songs/3.mp3", coverpath: "covers/3.jpg"},
    {songName: "salam-e-Ishq", filePath: "songs/4.mp3", coverpath: "covers/4.jpg"},
    {songName: "salam-e-Ishq", filePath: "songs/2.mp3", coverpath: "covers/5.jpg"},
    {songName: "salam-e-Ishq", filePath: "songs/2.mp3", coverpath: "covers/6.jpg"},
    {songName: "salam-e-Ishq", filePath: "songs/2.mp3", coverpath: "covers/7.jpg"},
]

songs.forEach(()=>{

})

// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})