const Gpio = require('pigpio').Gpio;

const switch1 = new Gpio(18, { mode: Gpio.OUTPUT });
const switch2 = new Gpio(17, { mode: Gpio.OUTPUT });

const turnAllOn = () => {
  switch1.digitalWrite(0);
  switch2.digitalWrite(0);
};

const turnAllOff = () => {
  switch1.digitalWrite(1);
  switch2.digitalWrite(1);
};

const turn1On = () => {
  switch1.digitalWrite(0);
};

const turn1Off = () => {
  switch1.digitalWrite(1);
};

const turn2On = () => {
  switch2.digitalWrite(0);
};

const turn2Off = () => {
  switch2.digitalWrite(1);
};

const readOne = () => switch1.digitalRead() ? 'OFF' : 'ON';
const readTwo = () => switch2.digitalRead() ? 'OFF' : 'ON';

const logAll = () => {
  console.log(`switch 1's status is ${readOne()}`);
  console.log(`switch 2's status is ${readTwo()}`);
}

const readAll = () => {
  return { switch1: readOne(), switch2: readTwo() };
}

module.exports = {
  turnAllOn,
  turnAllOff,
  turn1On,
  turn1Off,
  turn2On,
  turn2Off,
  logAll,
  readAll,
}