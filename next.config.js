const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
	// HOW ENV WORKS WITH NEXTJS
	// env: {
	// 	MAPBOX_TOKEN:
	// 		'pk.eyJ1Ijoicm9nYW5vYWxpZW4iLCJhIjoiY2swY3F1aXpnMDA1ZTNtbXAxM3ZjM3VhYSJ9.RxWHAVp0NiG89AT2kclp-g'
	// }
};
