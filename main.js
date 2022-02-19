function setup()
{
    canvas.createCanvas(480,360);
    canvas.center();
}

function draw()
{
    image(video, 0, 0, 480, 360);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "status detecting objects";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status = true;
}