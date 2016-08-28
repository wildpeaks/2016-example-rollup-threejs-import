import babel from 'rollup-plugin-babel';

export default {
	entry: './application.import-build-esnext.js',
	plugins: [
		babel({
			compact: true,
			presets: [
				['es2015', {modules: false}]
			]
		})
	],
	targets: [
		{
			format: 'iife',
			sourceMap: false,
			moduleName: 'application',
			dest: 'dist/bundle.import-build-esnext.iife.js'
		},
		{
			format: 'umd',
			sourceMap: false,
			moduleName: 'application',
			dest: 'dist/bundle.import-build-esnext.umd.js'
		},
		{
			format: 'es',
			sourceMap: false,
			dest: 'dist/bundle.import-build-esnext.es6.js'
		}
	]
};
