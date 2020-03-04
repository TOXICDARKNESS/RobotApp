const Arm = require('../lib/owi-edge');
const pause = require('./util/pause');
const arm = new Arm();

let test = [
  arm.moveElbowDown,
  arm.stopAll,
];

test = test.map(move => move.bind(arm));

function perform(danceMoves) {
  danceMoves.forEach((move) => {
    move();
    pause(1000);
  });
}

perform(test);
