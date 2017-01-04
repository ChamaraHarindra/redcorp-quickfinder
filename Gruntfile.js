module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'minified'
			},
			dist: {
				files: {
					'dist/css/main.css': 'src/scss/main.scss'
				}
			}
		},
		concat: {
			options: {
				separator: "\n", //add a new line after each file
				banner: "", //added before everything
				footer: "" //added after everything
			},
			dist: {
				src: 'src/js/**/*.js',
				dest: 'dist/js/concat.js'
			},
		},
		uglify: {
			dist: {
				src: 'dist/js/concat.js',
				dest: 'dist/js/concat.min.js'
			}
		},
		watch: {
			sass_compile: {
				files: ['src/scss/**/*.{scss,sass}'],
				tasks: ['sass:dist'],
				options: {
					livereload: true //reloads the browser
				}
			},
			js_frontend: {
				files: ['src/js/**/*.js'],
				tasks: ['concat:dist', 'uglify:dist'],
				options: {
					livereload: true //reloads the browser
				}
			},
			livereload: {
				files: ['*.html', '*.php', 'src/js/**/*.{js,json}', 'src/scss/**/*.{scss,sass}', 'dist/css/*.css', 'src/images/**/*.{png,jpg,jpeg,gif,webp,svg}'],
				options: {
					livereload: true
				}
			}
		},
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['watch']);
};
