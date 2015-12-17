// http://leveluptuts.com/tutorials/postcss-tutorials
// http://webdesign.tutsplus.com/tutorials/postcss-quickstart-guide-gulp-setup--cms-24543
// http://www.smashingmagazine.com/2015/12/introduction-to-postcss/

var postcss = require('gulp-postcss');
var gulp = require('gulp');
var csswring = require('csswring');

gulp.task('styles', function() {
	var processors = [
		csswring
	];

	return gulp.src('styles.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function() {
	gulp.watch('**/*.css', ['styles']);
});