class Form{
    constructor(){

    }
    display(){
var title = createElement("h2");
title.html("MULTIPLAYER CAR RACING GAME");
title.position(400,140);
var input=createInput("name");
input.position(470,260);
var button=createButton("start");
button.position(470,350)
var greeting=createElement("H5");
button.mousePressed(function(){
input.hide();
button.hide();

var name = input.value();
playerCount+=1;
player.update(name);
player.updateCount(playeCount);
greeting.html("HELLO! WELCOME TO MY GAME  "+ name);
greeting.postion(130,160);
});
    }
}