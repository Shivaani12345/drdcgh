var canvas = new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
b_i_width=30;
b_i_height=30;
var p_object="";
var b_i_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        p_object=Img;
        p_object.scaleToHeight(140);
        p_object.scaleToWidth(150);
        p_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(p_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        b_i_object=Img;
        b_i_object.scaleToHeight(b_i_height);
        b_i_object.scaleToWidth(b_i_width);
        b_i_object.set({
            top:player_y,
            left:player_x
});
canvas.add(b_i_object);
});
}