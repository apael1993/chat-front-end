var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {

    gulp.src('app/**/*.scss', { base: "./" })
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./"));
});

gulp.task('sass:watch', function () {
    gulp.watch('app/**/*.scss', ['sass']);
});

