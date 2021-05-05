canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
player_object="";
block_img_object="";
block_w=30;
block_h=30;
function player_update(){
    fabric.Image.fromURL(
    "player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
    }
    );
}

function new_image(get_image){
   
    fabric.Image.fromURL(
        get_image,function(Img){
            block_img_object=Img;
            block_img_object.scaleToWidth(block_w);
            block_img_object.scaleToHeight(block_h);
            block_img_object.set({
                top:player_y,left:player_x
            });
            canvas.add(block_img_object);
        }
        );
    }
     window.addEventListener("keydown" , my_keydown);
     function my_keydown(e){
         keypressed=e.keyCode;
        console.log(keypressed);
        if(e.shiftKey==true && keypressed=='80'){
            console.log("p and shift pressed together");
           block_w=block_w+10;
           block_h=block_h+10;
           document.getElementById("currentw").innerHTML = block_w;
           document.getElementById("currenth").innerHTML = block_h;
           console.log(block_w);
           console.log(block_h);
   
        }
        if(e.shiftKey==true && keypressed=='77'){
            console.log("m and shift pressed together");
           block_w=block_w-10;
           block_h=block_h-10;
           document.getElementById("currentw").innerHTML = block_w;
           document.getElementById("currenth").innerHTML = block_h;
    
        }

        if(keypressed == '38'){
            up();
            console.log("up");
           }
           if(keypressed == '40'){
               down();
               console.log("down");
              }
              if(keypressed == '37'){
               left();
               console.log("left");
              }
              if(keypressed == '39'){
               right();
               console.log("right");
              }
              if(keypressed == '70'){
               new_image("ironman_face.png")
               console.log('f');
              }
   
              if(keypressed == '84'){
               new_image("thor_right_hand.png")
               console.log('r');
              }
   
              if(keypressed == '66'){
               new_image("spiderman_body.png")
               console.log('b');
              }

              if(keypressed == '78'){
                new_image("captain_america_left_hand.png")
                console.log('l');
              }
              if(keypressed == '71'){
                new_image("hulk_leg.png")
                console.log('h');
               }
            }
             
            function up(){
                if(player_y >= 0){
                    player_y= player_y-block_h;
                    console.log("block image height = " + block_h);
                    console.log("when up arrow is pressed , x = " + player_x + " ,y= "+ player_y);
                    canvas.remove(player_object);
                    player_update();
                }
          
           }
          
           function down(){
              if(player_y <= 650){
                  player_y= player_y+block_h;
                  console.log("block image height = " + block_h);
                  console.log("when up arrow is pressed , x = " + player_x + " ,y= "+ player_y);
                  canvas.remove(player_object);
                  player_update();
              }
          
          }
          
          function left(){
              if(player_x >= 0){
                  player_x= player_x-block_w;
                  console.log("block image height = " + block_h);
                  console.log("when up arrow is pressed , x = " + player_x + " ,y= "+ player_y);
                  canvas.remove(player_object);
                  player_update();
              }
          
          }
          
          
          function right(){
              if(player_x <= 850){
                  player_x= player_x+block_w;
                  console.log("block image height = " + block_h);
                  console.log("when up arrow is pressed , x = " + player_x + " ,y= "+ player_y);
                  canvas.remove(player_object);
                  player_update();
              }
          
          }
          