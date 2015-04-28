'use strict';

var browserSync = require('browser-sync');
var gulp = require('gulp');
var loadTask = require('lmn-gulp-tasks');

gulp.task('js', loadTask('browserify', {
	src: 'src/script.js',
	dest: 'dest/script.js'
}));

gulp.task('scss', loadTask('scss', {
	src: 'src/styles.scss',
	dest: 'dest'
}));

gulp.task('build', ['js', 'scss']);

gulp.task('default', ['build'], function () {
	var files = [
		'dest/*.{html,js,css}'
	];

	browserSync.init(files, {
		server: './dest'
	});

	gulp.watch('src/*.s{a,c}ss', ['scss']);
	gulp.watch('src/*.js', ['js']);
});
