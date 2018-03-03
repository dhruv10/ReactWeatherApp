var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return(
		<div>
         <h1 className="text-center">Examples</h1>
         <p>Here are a few examples you can try out:</p>
         <ol>
         <li>
          <Link to='/?location=Delhi'>New Delhi</Link>
         </li>

         <li>
          <Link to='/?location=London'>London</Link>
         </li>
         </ol>
        </div>
  		);
}

module.exports = Examples;