import pkg from './package.json';

// The banner to add to the top of each file
// Pulls details from the package.json file
let banner = `/*! ${pkg.name} v${pkg.version} | ${pkg.description} | Copyright ${new Date().getFullYear()} | ${pkg.license} license */`;

// The formats to output
// Full list here: https://rollupjs.org/guide/en/#outputformat
let formats = ['umd', 'iife', 'es', 'cjs'];

// The files to compile with rollup.js,
// and the settings to use for them
export default formats.map(function (format) {
	return {
		input: 'js/identityManager.js',
		output: {
			file: `dist/identityManager.${format}.js`,
			format: format,
			name: 'ExampleLibrary',
			banner: banner,
			exports: 'auto'
		}
	};
});