const express = require('express');
const gpio = require('./gpio');
const { controllHumidity } = require('./humidityControll');

const app = express();

const PORT = 3001;

setInterval(controllHumidity, 20000);

app.get('/', (req, res) => {
  gpio.logAll();
  return res.status(200).json(gpio.readAll());
})

app.post('/switch/:action', (req, res) => {
  const { action } = req.params;
  switch (action) {
    case 'oneOn':
      gpio.turn1On();
      break;
    case 'oneOff':
      gpio.turn1Off();
      break;
    case 'twoOn':
      gpio.turn2On();
      break;
    case 'twoOff':
      gpio.turn2Off();
      break;
    case 'allOn':
      gpio.turnAllOn();
      break;
    case 'allOff':
      gpio.turnAllOff();
      break;
    default:
      gpio.turnAllOff()
      break;
  }
  return res.status(201).json(gpio.readAll());
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})