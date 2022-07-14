function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,450);
    canvas.position(560, 110);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');
}

function gotPoses() {
    if(results.length > 0)
    {
        console.log(results);
    }
}