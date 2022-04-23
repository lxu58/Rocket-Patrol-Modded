
/*
declare and push config to phaser
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play, Menu2, Play2]
  }
let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderUISize_SubMenu = game.config.height / 10;
let borderUISize_Num = game.config.height / 10;
let borderPadding = borderUISize / 3;


// reserve keyboard vars
let keyF, keyR, keyA, keyD, keyS;
let keyLeft, keyRight, keyUp, keyDown;


/*
console.log("print test")
*/

