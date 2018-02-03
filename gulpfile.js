var gulp = require("gulp");
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var webpack = require('webpack-stream');
var named = require('vinyl-named');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var config = require('./webpack.config.js');

gulp.task("compile", function() {
    var stream =
        gulp.src(['src/index.jsx'])
        .pipe(named())
        .pipe(plumber())
        .pipe(webpack( config ))
        .pipe(gulp.dest("build/src"));
    return stream;
})

gulp.task("webpack", function() {
    return gulp.src(['src/**/index.jsx', '!src/react/**/*-init.jsx~'])
      .pipe(named())
      .pipe(plumber())
      .pipe(webpack( config ))
      .pipe(gulp.dest("build/js/react"));
});

gulp.task('developReact', ['webpack'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        startPath : "public"
    });
    gulp.watch('src/**/*', ['webpack-watch']);
});
gulp.task('webpack-watch', ['webpack'], function (done) {
    browserSync.reload();
    done();
});

