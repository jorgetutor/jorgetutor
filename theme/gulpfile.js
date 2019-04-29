// @see https://www.drupal.org/node/2710181
// @see https://www.drupal.org/project/link_css

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('hello', function() {
  console.log('Hello!');
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['sass'], function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
