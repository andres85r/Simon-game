const color = ["blue","green","red","yellow"];
let level;
let clickNumber
let colorArray = [];
clickedArray = [];

$(document).one("keypress",start);
    
function start() {
    
    //delete colorArray
    colorArray = [];
    clickedArray = [];
    level = colorArray.length;
    clickNumber = 0;
    
    //Start
    $("h1").text("Level " + (level + 1));
    nextColor();
    $(".btn").on("click", clickColor);
};

function clickColor() {
    //read pressed button
    let pressedButton = this.classList[1];

    //show pressed button
    $("." + pressedButton).addClass("pressed");
    let sound = new Audio("sounds/" + pressedButton + ".mp3")
    sound.play();
    setTimeout(function () {$("." + pressedButton).removeClass("pressed");},100);

    //check if pressed button is the same
    if (colorArray[clickNumber] === pressedButton) {
        clickNumber++ ;
        if (clickNumber > level) {
            clickNumber = 0;
            level++ ;
            $("h1").text("Level " + (level + 1));
            setTimeout(nextColor,1000);
        }
    }
    
    else {
        //GAME OVER
        $("h1").text("Game Over. Press a key to start again");
        $("body").addClass("game-over")
        setTimeout(function () {$("body").removeClass("game-over")},100);
        let sound = new Audio("sounds/wrong.mp3")
        sound.play();
        colorArray = [];
        $(document).one("keypress", start);
    }
}

function nextColor() {
    //random color
    let rng = Math.floor(Math.random()*4);
    let randomColor = color[rng];

    //show random color
    $("." + randomColor).addClass("pressed");
    let sound = new Audio("sounds/" + randomColor + ".mp3")
    sound.play();
    setTimeout(function () {$("." + randomColor).removeClass("pressed");},100);

    //save random color
    colorArray.push(randomColor);
}

