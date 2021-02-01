module.exports = {
	target: 'serverless',
	async rewrites(){
		return [{
			source: '/',
			destination: '/content/',
		},{
			source: '/:path*',
			destination: '/:path*',
		},{
			source: '/:path*',
			destination: '/content/:path*',
		}];
	},
};
