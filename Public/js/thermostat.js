function Thermostat() {
  const _DEFAULT_TEMP = 20;
  const _MIN_LIMIT = 10;
  const _MAX_LIMIT_PS = 25;
  const _MAX_LIMIT = 32;
  this._temperature = _DEFAULT_TEMP;
  this._powerSavingSwitch = true;

   Thermostat.prototype.getTemperature = function () {
    return this._temperature;
  };

   Thermostat.prototype.powerSaverStatus = function () {
    return this._powerSavingSwitch;
  };

   Thermostat.prototype.up = function () {
     if(this.powerSaverStatus())
        this.getTemperature() < _MAX_LIMIT_PS ? this._temperature++ : this._temperature;
     else
     this.getTemperature() < _MAX_LIMIT ? this._temperature++ : this._temperature;
  };

   Thermostat.prototype.down = function () {
     if (this._temperature > _MIN_LIMIT)
        this._temperature--;

  };

  Thermostat.prototype.togglePowerSaver = function () {
    this._powerSavingSwitch = !this._powerSavingSwitch;
    this._temperature = this._temperature > _MAX_LIMIT_PS ? _MAX_LIMIT_PS : this._temperature;
  }

  Thermostat.prototype.reset = function () {
    this._temperature = _DEFAULT_TEMP;
  }

  Thermostat.prototype.energyUsage = function () {
    if (this._temperature < 18)
      return "Energy Usage: Low"
    else if (this._temperature >=18 && this._temperature < 25)
      return "Energy Usage: Medium"
    else
      return "Energy Usage: High"

  };

}
