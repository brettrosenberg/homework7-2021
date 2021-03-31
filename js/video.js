var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume*100 + "%"
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
 });

 document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=.95
	console.log(video.playbackRate);
	video.loop=true;
 });

 document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *=1.05
	console.log("Go Faster")
	console.log(video.playbackRate);
	video.loop = true;
 });


 document.querySelector("#vintage").addEventListener("click", function() {
	console.log("vintage");
	video.classList.add("oldSchool");
 });

 document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to normal");
	video.classList.remove("oldSchool")
 });

 document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value)
	var slider = this.value;
	video.volume = slider /100;
	document.querySelector("#volume").innerHTML= this.value + "%"

 });
 document.getElementById('mute').addEventListener("click", function() {
	if(video.muted == false) {
		video.muted = true
		document.querySelector("#mute").innerHTML= "Unmute"
		console.log("Muted");
	}

	else{
		video.muted = false
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML= "Mute"
	}	
 });

 document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime > 60) {
		console.log("Start time: " + video.curretnTime);
		console.log("Start");
		video.currentTime = 0;
		console.log("new time: " + video.currentTime);
	}
	else {
		console.log("Start time: " + video.currentTime)
		video.currentTime += 15
		console.log("new time: " + video.currentTime);
	}
 });
 