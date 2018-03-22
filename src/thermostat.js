function Thermostat() {
  this._temperature = 20;

   Thermostat.prototype.getTempterature = function () {
    return this._temperature;
  };
}
