const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

function copyHTML() {
  return src('./src/html/*.html').pipe(dest('./dist'));
}

function compilecss() {
  return src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(dest('./dist/css'));
}

// function optimizeImg() {
//   return src('./src/images/*/*.{jpg,png,svg}')
//     .pipe(
//       imagemin([
//         imagemin.mozjpeg({ quality: 80, progressive: true }),
//         imagemin.optipng({ optimizationLevel: 3 }),
//       ])
//     )
//     .pipe(dest('./dist/images'));
// }

function watchTask() {
  watch('./src/html/*.html', copyHTML);
  watch('./src/scss/**/*.scss', compilecss);
  // watch('./src/images/*/*.{jpg,png,svg}', optimizeImg);
}

exports.default = series(copyHTML, compilecss, watchTask);
