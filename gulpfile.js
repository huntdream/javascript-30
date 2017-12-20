const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('gulpwatcher/style.css'));
});


gulp.task('default', function () {
    let watcher = gulp.watch('gulpwatcher/*.scss', ['sass']);
    watcher.on('change', function (event) {
        console.log('File' + event.path + event.type + 'was changed');
    });
});