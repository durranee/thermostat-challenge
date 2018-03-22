function Thermostat() {
  this._temperature = 20;
  const _MIN_LIMIT = 10;

   Thermostat.prototype.getTemperature = function () {
    return this._temperature;
  };

   Thermostat.prototype.up = function () {
     this._temperature++;
  };

   Thermostat.prototype.down = function () {
     if (this._temperature > _MIN_LIMIT) {
        this._temperature--;
     }
  };
}
