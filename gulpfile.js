var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  sass = require('gulp-ruby-sass'),
  del = require('del');

gulp.task('cleanup', function(){
  return del(['./public/js/**', './public/css/**'], function(){
    
  });
});

gulp.task('sass', function () {
  return sass('./dev/sass/')
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('copy-js', function () {
  var js_libs = [
      './dev/components/knockout/dist/knockout.js',
      './dev/components/requirejs/require.js',
      './dev/components/jquery/jquery.min.js',
      './dev/js/**'
    ];
  
  return gulp.src(js_libs)
    .pipe(gulp.dest('./public/js'))
    .pipe(livereload());
});

gulp.task('rebuild',['cleanup', 'sass', 'copy-js'] ,function(){
  
});

gulp.task('watch', function() {
  gulp.watch('./dev/sass/*.scss', ['sass']);
  gulp.watch('./dev/js/**.js', ['copy-js']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js coffee ejs',
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed(__dirname);
    }, 500);
  });
});

gulp.task('default', [
  'sass',
  'develop',
  'watch'
]);
