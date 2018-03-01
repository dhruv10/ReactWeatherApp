function addPromise (a,b) {
	return new Promise( function (resolve,reject) {
      if (typeof  a === 'number' &&  typeof b === 'number' ){
      	resolve ( a + b );
		}

		else{
			      reject ( 'Not a number' );

		}
 	}); 

}

addPromise(2,'p').then( function (fromResolve) {
	console.log('success',fromResolve);
}, function (fromReject) {
	console.log('error',fromReject);
});