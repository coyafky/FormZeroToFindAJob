const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');

// 导入 包

function complileSass() {
  return gulp
    .src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist'));
}

function watchSass() {
  gulp.watch('src/scss/*.scss', complileSass);
}

exports.default = gulp.series(complileSass, watchSass);
