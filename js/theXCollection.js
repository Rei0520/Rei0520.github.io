//xCollection.html
function pauseVideo(name) {
    if (name == "video1") {
        if (document.getElementById("video1").textContent == "Pause") {
            document.getElementById("video1").textContent = "Play";
            document.getElementById("imgpause1").pause();
        }
        else if (document.getElementById("video1").textContent == "Play") {
            document.getElementById("video1").textContent = "Pause";
            document.getElementById("imgpause1").play();
        }
    }
    else if (name == "video2") {
        if (document.getElementById("video2").textContent == "Pause") {
            document.getElementById("video2").textContent = "Play";
            document.getElementById("imgpause2").pause();
        }
        else if (document.getElementById("video2").textContent == "Play") {
            document.getElementById("video2").textContent = "Pause";
            document.getElementById("imgpause2").play();
        }
    }
    else if (name == "video3") {
        if (document.getElementById("video3").textContent == "Pause") {
            document.getElementById("video3").textContent = "Play";
            document.getElementById("imgpause3").pause();
        }
        else if (document.getElementById("video3").textContent == "Play") {
            document.getElementById("video3").textContent = "Pause";
            document.getElementById("imgpause3").play();
        }
    }
}
function muteVideo(name) {
    if (name == "sound1") {
        if (document.getElementById("sound1").textContent == "Sound On") {
            document.getElementById("sound1").textContent = "Sound Off";
            document.getElementById("imgpause1").muted = false;
        }
        else if (document.getElementById("sound1").textContent == "Sound Off") {
            document.getElementById("sound1").textContent = "Sound On";
            document.getElementById("imgpause1").muted = true;
        }
    }
}