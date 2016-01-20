var gulp = require('gulp');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('typescript-compile', function() {
    gulp.src('./frontend/react/*.tsx')
    .pipe(typescript({ target: "ES6", removeComments: true, sortOutput: true, jsx: 'react' }))
    .js
    .pipe(gulp.dest('./frontend/temp/'))
})

function convert(target) {
  target.forEach(function(item, index, array) {
     browserify("./frontend/temp/" + item + ".js", {debug: true})
    .transform(babelify, {presets: ['es2015']})
    .bundle()
    .on("error", function(err){ console.log("Error: " + err.message); })
    .pipe(source(item + '.js'))
    .pipe(gulp.dest('./public/javascripts/'))
  })
}

gulp.task('browserify', function(){
  var target = ["main"];
  convert(target)
})

gulp.task('default', ['typescript-compile', 'browserify'], function() {
  console.log('typescript-compile run...')
})
