class Form{
    constructor(){}
    display(){
        var title = createElement('h3');
        title.html("CAR RACING GAME");
        title.position(120,0);

        var input= createInput("Name");
        var button = createButton("PLAY");
       

        input.position(130,160);
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
             button.hide();
              var name =  input.value();
              playerCount = playerCount +1;
              player.update(name);
              player.updateCount(playerCount);
              var greeting = createElement('h2');
              greeting.html ("Hey!!" + name);
              greeting.position(120,160); 
        });
    }
      
}