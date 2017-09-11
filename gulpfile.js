var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

gulp.task('build', function () {
    gulp.src('./src/precss/style.less')
            .pipe(less())
			/*
            .pipe(autoprefixer({
                browsers: ['> 0.01%'],
                cascade: false
            }))
            .pipe(minify())*/
            .pipe(gulp.dest('./src/css'))
            .pipe(browserSync.reload({
                stream: true
            }));
});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('./src/precss/*.less', ['build']);
});

gulp.task('browserSync', function(){
   browserSync.init({
        server: {
            baseDir: './src'
        }
    })
});