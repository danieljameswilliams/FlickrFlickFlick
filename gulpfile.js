var gulp          = require('gulp'),
    uglify        = require('gulp-uglify'),
    minify        = require('gulp-minify-css'),
    jshint        = require('gulp-jshint'),
    concat        = require('gulp-concat'),
    streamqueue   = require('streamqueue'),
    sass          = require('gulp-ruby-sass');

gulp.task( 'build', ['js', 'css'] );

gulp.task('watch', function () {
   gulp.watch('assets/javascripts/**/*.js', ['js']);
   gulp.watch('assets/sass/**/*.scss', ['css']);
});

gulp.task( 'js', function () {
  return streamqueue( { objectMode: true },
    gulp.src('assets/javascripts/lib/_underscore.js'),
    gulp.src('assets/javascripts/lib/_handlebars.js'),
    gulp.src('assets/javascripts/lib/_backbone.js'),
    gulp.src('assets/javascripts/models/**/*.js'),
    gulp.src('assets/javascripts/collections/**/*.js'),
    gulp.src('assets/javascripts/views/**/*.js'),
    gulp.src('assets/javascripts/main.js')
  )
  .pipe( jshint() )
  .pipe( jshint.reporter('default') )
  .pipe( uglify() )
  .pipe( concat('javascripts/main.js') )
  .pipe( gulp.dest('build') );
} );

gulp.task('css', function () {
  return gulp.src('assets/sass/main.scss')
    .pipe(sass({sourcemap: true, sourcemapPath: '../scss'}))
    .on('error', function (err) { console.log(err.message); })
    .pipe(gulp.dest('dist/css'));
});
