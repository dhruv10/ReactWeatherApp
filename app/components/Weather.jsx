var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMssg = require('WeatherMssg');
var openWeatherMap = require('openWeatherMap'); 

var Weather = React.createClass ({
	getInitialState: function() {
        return {

        	isLoading : false
        }
	},

	handleSearch: function (location) {
		
	
        var that = this;
        
        this.setState({isLoading : true});

        openWeatherMap.getTemp(location).then( function (temp) {
			that.setState({
				isLoading: false,
				location: location,
				temp: temp
			}); 

        }, function (errorMessage) {

        	that.setState({isLoading: false}); 

        	alert('errorMessage');
        	

        }
        	);




	},

  render: function () {

  	var {isLoading ,temp,location} = this.state;

  	function renderMssg () {

  		if (isLoading){

  			return <h3> Fetching Weather...</h3>;
  		}

  		else if ( temp && location ) {

         return   <WeatherMssg location = {location} temp = {temp}/>;
  		
  		}
  	}

  	return(
        <div>
          
           
           <h2> Get Weather </h2>

           <WeatherForm onSearch={this.handleSearch}/>
           {renderMssg()}
        </div> 
  		);
  }
});

module.exports = Weather;