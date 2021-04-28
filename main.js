var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        console.log("Taking Selfie In 5 Seconds");
        speak();
    }

}

function speak() {
    var synth = window.speechSynthesis;
    var speakData = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);
    Webcam.attach(camera);


setTimeout(function() {
    take_snapshot();
    save();
}, 5000); 


}

Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
    png_quality : 80
});

camera = document.getElementById("camera");

function take_snapshot() {
     Webcam.snap(function(data_uri) {
         document.getElementById("result").innerHTML = "<img class='img-responsive' id='selfie' src='" + data_uri + "'>";
     });
}

function save() {
    link = document.getElementById("link");
    img = document.getElementById("selfie").src;
    link.href = img;
    link.click();
}