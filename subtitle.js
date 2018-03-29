alert("hello");
//var curSub;


var video1 = document.getElementsByTagName("video");
var trackCur = video1[0].textTracks[0];
console.log(trackCur);



trackCur.oncuechange = function () {
    console.log("тут");
    var cue = this.activeCues[0];
    
    if (cue !== undefined) {
        cue.text = "<a href=\"#\" class=\"subt\">" + cue.text + "</a>";
        console.log(cue.text);
        var dsp = document.getElementById("display"); // get display area 
        dsp.innerHTML = "Text: " + cue.text;  // show text  
        dsp.innerHTML += "<br />StartTime: " + cue.startTime; // show start time 
        dsp.innerHTML += "<br />End Time: " + cue.endTime;
    }
}




video1[0].click = function () {
    alert("нажали на видео");
}

video1[0].onmouseover = function () {
    video1[0].play();
   // alert("нажали на видео");
}

function ChangeOver(x) {
//    alert("навели");
  //  alert(cueCur[i].text);
    video1[0].play()
}


            //if (tt.activeCues[0] !== undefined) {
            //    var dynamicHTML = "id: " + tt.activeCues[0].id + ", ";
            //    dynamicHTML += "text: " + tt.activeCues[0].text + ", ";
            //    dynamicHTML += "startTime: " + tt.activeCues[0].startTime + ",  ";
            //    dynamicHTML += "endTime: " + tt.activeCues[0].endTime;
            //    document.getElementById("insertionPoint").innerHTML += dynamicHTML + "<br/>";
