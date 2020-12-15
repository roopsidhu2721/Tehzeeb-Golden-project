var canvas
var gameState=0;
var playerCount;
var database;
var form,player,game;
var backgroundImg;
var allPlayers;
var player1, player2,players;
var player1Img, player2Img;
var reward,coin;
var wallGroup, rewardGroup;
var confidence = 0;

function preload()
{
    player1Img=loadImage("Sun1.png");
    player2Img=loadImage("WingBot.png");
    rewardImg = loadAnimation("Coin1.png","Coin2.png", "Coin3.png", "Coin4.png", "Coin5.png", "Coin6.png", "Coin7.png", "Coin8.png", "Coin9.png", "Coin10.png");
}

function setup()
{
    canvas=createCanvas(displayWidth-100, displayHeight-100);
    database=firebase.database();
    game = new Game();
    game.getState();
    game.start();
   
    wallGroup = new Group();
    rewardGroup = new Group();

}
function draw()
{
if(playerCount === 2)
{
game.update(1);
}
if(gameState === 1)
{
    clear();
    game.play();
}
if(gameState === 2)
{
    game.end();
}
}