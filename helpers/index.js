const logTime = (time_stamp) => {
  const date = new Date(time_stamp);
  console.log(`Measured at: ${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  console.log(`-------------------------------`);
};

const logHumidityAndTemperature = (humidity_value, temperature_value) => {
  console.log(`
  Humidity at ${humidity_value}%.
  Temperature at ${temperature_value}\xB0C.
  `)
};

const logReport = (humidity_value, temperature_value, time_stamp) => {
  logHumidityAndTemperature(humidity_value, temperature_value);
  logTime(time_stamp);
};

module.exports = {
  logReport,
}