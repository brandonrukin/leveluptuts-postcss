// http://leveluptuts.com/tutorials/postcss-tutorials
// http://webdesign.tutsplus.com/tutorials/postcss-quickstart-guide-gulp-setup--cms-24543
// http://www.smashingmagazine.com/2015/12/introduction-to-postcss/

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var csswring = require('csswring');
var cssnext = require('cssnext');
var precss = require('precss');
var autoprefixer = require('autoprefixer-core');

gulp.task('styles', function() {
	var processors = [
		precss({}),
		autoprefixer({browsers:['last 2 version']}),
		cssnext({})
	];

	return gulp.src('styles.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function() {
	gulp.watch('**/*.css', ['styles']);
});