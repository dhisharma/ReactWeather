var React = require('react');

var WeatherMessage =({temp,location}) =>{
           var tempf = (5/9) * (temp-32);
        return(
            <h2>It's {tempf} degree celcius in {location}</h2>
        )
}
module.exports = WeatherMessage;