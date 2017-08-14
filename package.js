var packager = require('electron-packager')
packager({
	'dir': '../cherry/',
	'arch':'x64',
	'platform':'all',
	'appVersion':'0.0.1',
	'out':'./electronApp',
	'overwrite':true,
	'download':{
		'cache':'./electronSDK'
	},
	'osx-sign':true,
	'appBundleId':'cherry',
	'icon':'./icons/logo.icns',
	'asar':true
}, function done_callback(err, appPaths) { /* … */
	console.log(err)
})
