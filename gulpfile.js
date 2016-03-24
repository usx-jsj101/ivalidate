var gulp = require('gulp'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    connect=require('gulp-connect'),
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

gulp.task('connect',function(){
   connect.server({
    root: '',
    port: 4001,
    livereload: true
  }); 
})

gulp.task('scripts', function() {
    return gulp.src(iv.jsfiles)
        .pipe(concat(iv.filename + ".js"))
        .pipe(jshint())
        .pipe(gulp.dest(path.dist.root))
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(path.source.scripts, ['scripts']);
});


gulp.task('default', ['connect',"scripts", 'watch']);
