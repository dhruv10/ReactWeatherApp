var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMssg = require('WeatherMssg');
var openWeatherMap = require('openWeatherMap'); 
var ErrModal = require('ErrModal');

var Weather = React.createClass ({
	getInitialState: function() {
        return {

        	isLoading : false

        }
	},

	handleSearch: function (location) {
		
	
        var that = this;
        
        this.setState({
          isLoading : true,
          errorMessage : undefined
        });

        openWeatherMap.getTemp(location).then( function (temp) {
			that.setState({
			
				location: location,
				temp: temp,
          isLoading: false
			}); 

        }, function (e) {

        	that.setState({
            isLoading: false,
            errorMessage: e.message
          }); 
        	        }
        	);

},
  render: function () {

  	var {isLoading ,temp,location,errorMessage} = this.state;

  	function renderMssg () {

  		if (isLoading){
  			return <h3 className="text-center"> Fetching Weather...</h3>;
                		}
    	else if ( temp && location ) {
        return   <WeatherMssg location = {location} temp = {temp}/>;
  		                         		 }
  	                        
                            }

    function renderErr () {
        if ( typeof errorMessage === 'string'){
                return(<ErrModal message={errorMessage}/>)
             }
    }                        

  	return(
        <div>
           <h1 className="text-center page-title"> Get Weather </h1>
           <WeatherForm onSearch={this.handleSearch}/>
           {renderMssg()}
           {renderErr()}
        </div> 
  		);
  }
});

module.exports = Weather;

