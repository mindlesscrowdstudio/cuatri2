var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('browser-sync', function() {
  // place code for your default task here
  console.log('runnung gulp');
  bs.init({
    server: {
      baseDir: "./"
    }
  });

});