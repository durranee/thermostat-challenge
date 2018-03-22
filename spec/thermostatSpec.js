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

});
