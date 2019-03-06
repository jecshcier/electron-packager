const packager = require('electron-packager')
const path = require('path')
const fs = require('fs-extra')
packager({
		'dir': '../cherry2/core',
		'arch': 'x64',
		'platform': 'darwin',
		'electronVersion': '4.0.5',
		'appVersion': '0.0.1',
		'out': './electronApp',
		'overwrite': true,
		'download': {
			'cache': './electronSDK'
		},
		'osx-sign': true,
		'appBundleId': 'cherry',
		'icon': './icons/logo.icns',
		'asar': true
	}).then((appPaths) => { /* … */
		return fs.copy(path.join(__dirname, `../cherry2/app`), `${appPaths}/cherry2.app/Contents/Resources/app`)
	})
	.then(() => {
		console.log('ok')
	})
	.catch((err) => {
		console.log(err)
	})