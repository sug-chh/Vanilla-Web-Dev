
$(".drum").click(handleClick);

function handleClick() {
  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
}

$(document).keydown(function(event){
makeSound(event.key);
buttonAnimation(event.key);
})


function makeSound(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":

      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":

      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(buttonInnerHtml);
      break;
  }
}

function buttonAnimation(currentKey){
  var activeButton = $("."+currentKey);
  activeButton.addClass("pressed");
  setTimeout(function() {
    activeButton.removeClass('pressed');
  }, 100);
}