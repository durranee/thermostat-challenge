function Thermostat() {
  this._temperature = 20;
  const _MIN_LIMIT = 10;
  const _MAX_LIMIT_PS = 25;
  const _MAX_LIMIT = 32;
  this._powerSavingSwitch = true;

   Thermostat.prototype.getTemperature = function () {
    return this._temperature;
  };

   Thermostat.prototype.switchCheck = function () {
    return this._powerSavingSwitch;
  };

   Thermostat.prototype.up = function () {
     if(this.switchCheck())
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
  }

  Thermostat.prototype.reset = function () {
    this._temperature = 20;
  }

  Thermostat.prototype.energyUsage = function () {
    if (this._temperature < 18)
      return "Low Usage"
    else if (this._temperature >=18 && this._temperature < 25)
      return "Medium Usage"
    else
      return "High Usage"

  };
  // You can ask about the thermostat's current energy usage:
  // < 18 is low-usage,
  // < 25 is medium-usage,
  // anything else is high-usage.



}
