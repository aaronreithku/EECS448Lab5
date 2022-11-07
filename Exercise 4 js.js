function change() 
{ 
    var redBord = document.getElementById("red_border").value
    var greenBord = document.getElementById("green_border").value
    var blueBord = document.getElementById("blue_border").value
    var widthBord = document.getElementById("border_width").value

    document.getElementById("myDiv").style.borderColor = rgb(redBord, greenBord, blueBord);
    document.getElementById("myDiv").style.borderWidth = widthBord;

    var redBack = document.getElementById("red_background").value
    var greenBack = document.getElementById("green_background").value
    var blueBack = document.getElementById("blue_background").value

    document.body.style.backgroundColor = rgb(redBack, greenBack, blueBack);
} 

function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
  }