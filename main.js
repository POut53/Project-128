var leftwristx=0;
var leftwristy=0;
var rightwristx=0;
var rightwristy=0;
function preload(){
    song=loadSound("stay.mp3");
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    canvas.size(500,500);
    video.hide();
    var poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',getPoses);
    console.log("testingg");
}
function getPoses(results){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log(leftWristX);
    console.log(leftWristY);
    console.log(rightWristY);
    console.log(rightWristX);
}
function modelloaded(){
    console.log("Model is Loaded!")
}
function draw(){
    image(video,0,0,500,500);
}