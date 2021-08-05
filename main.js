noseX= 0;
noseY= 0;

function preload(){
nose_image= loadImage('https://i.postimg.cc/dtrzHTrK/580b57fbd9996e24bc43bed5.png');
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 function gotPoses(result){
if(result.length > 0){
    console.log(result);
    noseX= result[0].pose.nose.x - 10 
    noseY= result[0].pose.nose.y - 10
}
 }

function modelLoaded(){
    console.log("model Loaded!")
}

function draw(){
image(video, 0, 0, 300, 300);
image(nose_image, noseX, noseY, 20, 20)
}

function take_snapshot(){
    save("downloaded_img.png");
}