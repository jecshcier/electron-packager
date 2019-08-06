const packager = require('electron-packager')
const path = require('path')
const fs = require('fs-extra')
packager({
		'dir': '../cherry2/core',
		'arch': 'x64',
		// linux, win32, darwin, mas, all
		'platform': 'win32',
		'electronVersion': '4.0.7',
		'appVersion': '0.0.1',
		'out': './electronApp',
		'overwrite': true,
		'download': {
			'cache': './electronSDK'
		},
		'osx-sign': true,
		'appBundleId': 'cherry',
		// mac
		// 'icon': './icons/logo.icns',
		// win
		'icon': './icons/logo.ico',
		'asar': true
	}).then((appPaths) => { /* … */
		if(process.platform === 'darwin'){
			return fs.copy(path.join(__dirname, `../cherry2/app`), `${appPaths}/cherry2.app/Contents/Resources/app`)
		}else if(process.platform === 'win32'){
			return fs.copy(path.join(__dirname, `../cherry2/app`), `${appPaths}/resources/app`)
		}
	})
	.then(() => {
		console.log('ok')
	})
	.catch((err) => {
		console.log(err)
	})