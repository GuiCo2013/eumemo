var noseX=0;
var noseY=0
function preload() {
 cartola = loadImage("cartola.png")
 video = loadImage("cartola.png")
}

function setup() {
  canvas = createCanvas(650, 500);
  canvas.center();

  video = createCapture(VIDEO)
  video.hide()

  poseNet = ml5.poseNet(video,modeloCarregado)
  poseNet.on("pose",resultados)
}

function modeloCarregado(){
  console.log("modelo carregado")
}

function resultados(r){
  if(r.length>0){
    console.log(r)
    noseX = r[0].pose.nose.x
    noseY = r[0].pose.nose.y
    console.log(noseX+","+noseY)
  }
}

function draw() {
  image(video,0,0,650,500)
  fill("red")
  circle(noseX,noseY,50)
  image(cartola,noseX-50,noseY-50,150,-250)
}

function takeSnapshot(){    
  save('myFilterImage.png');
}