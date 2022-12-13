const pianoKeys = document.querySelectorAll(".piano-keys .key"),
keysCheckbox = document.querySelector(".keys-checkbox input"),
volumeSlider = document.querySelector(".volume-slider input");
let allKey= [],
audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.src= `tunes/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    },150);
}

pianoKeys.forEach(key => {
    allKey.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e => {
    if(allKey.includes(e.key)) playTune(e.key);
});

const handleVolume = (e) => {
audio.volume= e.target.value;
};

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

keysCheckbox.addEventListener("click", showHideKeys);    
document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);