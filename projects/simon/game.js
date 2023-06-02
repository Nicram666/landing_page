var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;

function nextSequence() {
    userClickedPattern = []
    level++
    $('#level-title').text("level " + level)
    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $('#' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    playSound(randomChosenColour)

}

$('.btn').click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour)
    playSound(userChosenColour)
    checkAnswer(userClickedPattern.length-1)
})

function playSound(name) {
    var audio = new Audio('sounds/' + name + ".mp3");
    audio.play()
}

function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed')
    setTimeout(function () {
        $('#' + currentColour).removeClass('.pressed')
    }, 100)
}

$(document).keydown(function() {
    if (started === false) {
        $("#level-title").text("level" + level);
        nextSequence();
        started = true;
    }
}
)

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log("success")
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout( function() {
                nextSequence()
            },1000)
        }
    }
    else {
        playSound('wrong')
        $('#level-title').text("game over press any key to restart")
        startOver()
    }
}

function startOver() {
    level = 0
    gamePattern = []
    started = false;
}