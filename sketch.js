var db,pc,player,game,form
var gs=0
var car1,car2,car3,car4,cars
var allPlayers
function setup(){
    createCanvas(windowWidth,windowHeight);
    db=firebase.database()
    game=new Game()
    game.getGameState()
    game.start()
}

function draw(){
    if(pc===2){
        game.updateGameState(1)
    }
    if(gs===1){
        clear()
        game.play()
    }
}