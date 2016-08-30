var gulp = require('gulp'),
    gulpSass = require('gulp-sass');

gulp.task('style', function () {
    gulp.src('./assets/scss/*.scss')
        .pipe(gulpSass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./assets/css'));
});
