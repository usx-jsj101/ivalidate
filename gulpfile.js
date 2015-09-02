var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    path = {
        root: './',
        source: {
            root: 'src/',
            scripts: 'src/*.js'
        },
        dist: {
            root: 'dist/'
        },
        build: {
            root: 'build/'
        }
    },
    iv = {
        filename: "ivalidate",
        jsfiles: ['./src/open.js', './src/utils.js', './src/core.js', './src/close.js']
    };

gulp.task('scripts', function() {
    return gulp.src(iv.jsfiles)
        .pipe(concat(iv.filename + ".js"))
        .pipe(jshint())
        .pipe(gulp.dest(path.dist.root));
});

gulp.task('watch', function() {
    gulp.watch(path.source.scripts, ['scripts']);
});


gulp.task('default', ["scripts", 'watch']);
