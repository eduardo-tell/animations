import gulp from 'gulp';
import sass from 'gulp-sass';
import concat from 'gulp-concat';
import browserSync from "browser-sync";

exports.sass = () => (
    gulp.src('./assets/css/**/**')
    .pipe(sass({outputStyle: 'compressed', errLogToConsole: true }))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('./dist/css'))
);

gulp.task('watch', () => {
    gulp.watch('./assets/css/**', gulp.series('css'))
});

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: './',
            index: 'index.html'
        }
    });

    gulp.watch('./assets/css/**', gulp.series('sass'))
    gulp.watch('./**/**/**').on('change', browserSync.reload);
});

gulp.task('default', gulp.series('serve'));
