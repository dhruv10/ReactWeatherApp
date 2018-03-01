var React = require('react');

var WeatherMssg = (props) => {
	var {temp,location} = props; 
  	return(

          <div>
           <h2>It's {temp} in {location}</h2>
          </div>

  		);
}

module.exports = WeatherMssg;