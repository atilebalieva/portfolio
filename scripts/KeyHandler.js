const KeyHandler = {
  init: function() {
    document.addEventListener('keydown', KeyHandler.onKeyDown);
  },

  onKeyDown: function(event) {
    if (event.code === "ArrowUp") {
      KeyHandler.onArrowUp();
    } else if (event.code === "ArrowDown") {
      KeyHandler.onArrowDown();
    } else if (event.code === "ArrowLeft") {
      KeyHandler.onArrowLeft();
    } else if (event.code === "ArrowRight") {
      KeyHandler.onArrowRight();
    } 
  },

  onArrowUp: function() {
    log("up");
  },

  onArrowDown: function() {
    log("down");
  },

  onArrowLeft: function() {
    log("left");
  },

  onArrowRight: function() {
    log("right");
  },
}