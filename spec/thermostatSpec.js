describe("Thermostat", function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it("should start from 20 degrees", function(){
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("increase temperature with an up function", function(){
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it("increase temperature with an up function", function(){
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it("stops decreasing the temperature below 10", function(){
    for (var i = 0; i < 12; i++)
      thermostat.down();
      expect(thermostat.getTemperature()).toEqual(10);
  });

  it("If powersaving mode is on max temperature is set to 25 degrees", function(){
    for (var i = 0; i < 100; i++)
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(25);
  });


  it("If powersaving mode is off max temperature is set to 32 degrees", function(){
    thermostat.togglePowerSaver();

    for (var i = 0; i < 100; i++)
      thermostat.up();
      expect(thermostat.getTemperature()).toEqual(32);
  });

  it("should set temp down to 25 if PS mode turned on while temp > 25", function(){
    thermostat.togglePowerSaver();
    for (var i = 0; i < 100; i++)
      thermostat.up();
      thermostat.togglePowerSaver();
      expect(thermostat.getTemperature()).toEqual(25);
  });


  it("resets the temperature to 20 degrees", function(){
      thermostat.reset();
      expect(thermostat.getTemperature()).toEqual(20);
  });


  it("returns the info on current energy usage Medium", function(){
      expect(thermostat.energyUsage()).toEqual("Energy Usage: Medium");
  });

  it("returns the info on current energy usage Low", function(){
    for (var i = 0; i < 5; i++)
        thermostat.down();
      expect(thermostat.energyUsage()).toEqual("Energy Usage: Low");
  });

  it("returns the info on current energy usage High", function(){
    for (var i = 0; i < 10; i++)
      thermostat.up();
      expect(thermostat.energyUsage()).toEqual("Energy Usage: High");
  });

});
