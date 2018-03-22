describe("Thermostat", function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  })

  it("should start from 20 degrees", function(){
    expect(thermostat.getTempterature()).toEqual(20);
  });

});
