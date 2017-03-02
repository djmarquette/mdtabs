var gulp = require('gulp');
var tsc = require("gulp-tsc");
var sass = require("gulp-sass");

var paths = {
    webroot: "./mdtabs/"
};
paths.app = paths.webroot + "app/";
paths.stylesheets = paths.webroot + "assets/stylesheets/";

// Compile SCSS to CSS
gulp.task('compileSASS', function () {
    gulp.src(paths.stylesheets + "*.scss")
.pipe(sass({ outputStyle: 'compressed' }))
.pipe(gulp.dest(paths.stylesheets));
});
