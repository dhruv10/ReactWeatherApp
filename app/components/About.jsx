var React = require('react');

var About = () => {
		return(
          <div>
  		    <h1 className="text-center page-title">About Us</h1>
      			<p>
        			This is a weather application build on React. I have built this
        			for my own practise.
     	     	 </p>
      			<p>
       				 Here are some of the tools I used:
      			</p>
     		 <ul>
       		 <li>
          		<a href="https://facebook.github.io/react">React</a> - This was the
            		JavaScript library used.
        	</li>
        	<li>
          		<a href="http://openweathermap.org">Open Weather Map</a> - I used
            		Open Weather Map to search for weather data by city name.
        	</li>
        	<li>
          		<a href="http://github.com/dhruv10/ReactWeatherApp">ReactWeatherApp Code</a> - Here is 
          		my Github repo link for this application. You may use it for any purpose, incase you like it.
        	</li>
      	
      		</ul>
    	</div>
  );
}

module.exports = About;