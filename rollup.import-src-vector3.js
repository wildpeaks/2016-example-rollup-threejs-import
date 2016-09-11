import babel from 'rollup-plugin-babel';

export default {
	entry: './application.import-src-vector3.js',
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
			dest: 'dist/bundle.import-src-vector3.iife.js'
		},
		{
			format: 'umd',
			sourceMap: false,
			moduleName: 'application',
			dest: 'dist/bundle.import-src-vector3.umd.js'
		},
		{
			format: 'es',
			sourceMap: false,
			dest: 'dist/bundle.import-src-vector3.es6.js'
		}
	]
};
