import babel from 'rollup-plugin-babel';


// Duplicated from https://github.com/mrdoob/three.js/blob/dev/rollup.config.js
function glsl(){
	return {
		transform(code, id){
			if (!/\.glsl$/.test(id)){
				return;
			}
			return 'export default ' + JSON.stringify(
				code
				.replace(/[ \t]*\/\/.*\n/g, '')
				.replace(/[ \t]*\/\*[\s\S]*?\*\//g, '')
				.replace(/\n{2,}/g, '\n')
			) + ';';
		}
	};
}


export default {
	entry: './application.import-src-vector3.js',
	plugins: [
		glsl(),
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
