'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');

Error.stackTraceLimit = 2;

gulp.task('test', function() {
  gulp
    .src('tests/*.test.js', {
      read: false
    })
    .pipe(mocha())
    .on('error', function(e) {
      console.warn(e.message);
      this.emit('end');
    });
});

gulp.task('watch', function(){
  gulp.watch('tests/*.test.js', ['test']);
});

gulp.task('default', ['test','watch']);
