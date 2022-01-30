const axios = require('axios').default;
const gpio = require('../gpio');
const { logReport } = require('../helpers');

const URL = 'http://localhost:3000/last';

const controllHumidity = () => {
  axios.get(URL)
    .then(({ data }) => {
      const { humidity_value, temperature_value, time_stamp } = data[0];
      if (humidity_value > 70) gpio.turn1On();
      if (humidity_value < 60) gpio.turn1Off();
      logReport(humidity_value, temperature_value, time_stamp);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = {
  controllHumidity,
}