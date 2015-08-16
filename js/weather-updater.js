$(document).ready(function() {  
  getWeather(); //Get the initial weather.
  setInterval(getWeather, 600000); //Update the weather every 10 minutes.
});

function getWeather() {
  $.simpleWeather({
    location: '77005',
    unit: 'f',
    success: function(weather) {
      html = '<h1 class="icon-'+weather.code+'"></h1>';
      html += '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.city+', '+weather.region+'</li></ul>'; 
      // html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';

      var timestamp = moment(weather.updated);
      html += '<p class="updated">Updated '+moment(timestamp).fromNow()+'</p>'; 

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}

