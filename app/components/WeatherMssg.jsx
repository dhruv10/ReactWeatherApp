var React = require('react');

var WeatherMssg = (props) => {
	var {temp,location} = props; 
  	return(

          <div>
           <h4 className="text-center">It's {temp} degree celsius in {location}</h4>
          </div>

  		);
}

module.exports = WeatherMssg;