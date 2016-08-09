var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')

gulp.task('default', function () {
  gulp.src('src/sass/app.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist'));
})
