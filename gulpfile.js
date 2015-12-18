// http://leveluptuts.com/tutorials/postcss-tutorials
// http://webdesign.tutsplus.com/tutorials/postcss-quickstart-guide-gulp-setup--cms-24543
// http://www.smashingmagazine.com/2015/12/introduction-to-postcss/

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var lost = require('lost');
var rucksack = require('rucksack-css');

gulp.task('styles', function() {
	var processors = [
		lost,
		rucksack,
		autoprefixer({browsers:['last 2 version']})
	];

	return gulp.src('styles.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function() {
	gulp.watch('**/*.css', ['styles']);
});