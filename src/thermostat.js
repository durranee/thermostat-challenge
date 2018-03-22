function Thermostat() {
  this._temperature = 20;

   Thermostat.prototype.getTemperature = function () {
    return this._temperature;
  };

   Thermostat.prototype.up = function () {
     this._temperature++;
  };

   Thermostat.prototype.down = function () {
     if (this._temperature > 10) {
        this._temperature--;
     }
  };
}
