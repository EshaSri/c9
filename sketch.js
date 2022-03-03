var ball, paddle;
var edges 
var brickes
var score= 0
function setup() {
  createCanvas(400,400);
  edges=createEdgeSprites()
  brickes=new Group()
  paddle=createSprite(200,200,100,30)
  for(var X=50;X<=350;X+=85){
    brick=createSprite(X,100,80,20)
    brickes.add(brick)
  }
 
  paddle.y= 380
ball=createSprite(200,200,20,20)
ball.velocityY=4
ball.velocityX=6
}

function draw() 
{
  background(30); 
  text("score "+score,10,50)
  paddle.x=mouseX
  ball.bounceOff(paddle)
  ball.bounceOff(edges)
  ball.bounceOff(brickes,brickhit)
    //paddle.y=mouseY
drawSprites()

}
function brickhit(b,bk){
  bk.destroy()
  score=score+1
}



