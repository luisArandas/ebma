

// lets just test howlerjs

var sound = new Howl({
    src: ['media/audio/gminor.wav'] //relative
});


function testaudio() {
    console.log(sound);
    sound.play();
}