$( document ).ready(function() {

  function setEnergyUsageColorClass() {
    if(thermostat.energyUsage() === "Energy Usage: Low"){
      $("#energy-usage").removeClass();
      $("#energy-usage").addClass("low");
    }
    else if(thermostat.energyUsage() === "Energy Usage: Medium"){
      $("#energy-usage").removeClass();
      $("#energy-usage").addClass("medium");
    }
    else {
      $("#energy-usage").removeClass();
      $("#energy-usage").addClass("high");
    }
  }

  reprintTemperture = function(){
    $("#text-temp").text(thermostat.getTemperature()+"°C");
    $("#energy-usage").text(thermostat.energyUsage());
    setEnergyUsageColorClass();
  };

  function updateCityInfo(city) {

    $.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12379761416befa8f8b7fa740cc99415&units=metric`, function(data) {
      pngAddress = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
      $('#weather-png').attr('src',pngAddress);
      $('#city-info').text(data.name + " > " + data.weather[0].main + "(" + data.main['temp'] + "°C)")
    });

  }

  thermostat = new Thermostat();
  reprintTemperture();
  updateCityInfo('london')

  $('#city-search').keypress(function(e) {
      if(e.which == 13) {
        var city = document.getElementById('city-search').value
        updateCityInfo(city);
      }
  });

  $( "#btn-up" ).click(function( event ) {
    thermostat.up();
    reprintTemperture();
  });

  $( "#btn-down" ).click(function( event ) {
    thermostat.down();
    reprintTemperture();      });

  $("#btn-powersaver").click(function( event){
    thermostat.togglePowerSaver();
    reprintTemperture();
  });

  $("#btn-reset").click(function (event) {
    thermostat.reset();
    reprintTemperture();      });

    $("#btn-save").click(function (event) {
      $.post("/", {roomTemp: thermostat.getTemperature(), psmode: thermostat.powerSaverStatus()});
    });

});
