var {src, dest, watch, series} = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');

// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./scss/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./scss/**/*.scss")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
    }))
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};

exports.serve = bs;

function buildHTML(done) {
  src("**.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist/"))
  done();
}

function buildCSS(done) {
  src("css/**/**.css")
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest("dist/css/"));
  done();
}

function builJS(done) {
  src(["js/**.js", "!js/**.min.js", "!js/**-min.js"])
    .pipe(minify())
    .pipe(dest("dist/js/"));

    src("js/**.min.js").pipe(dest("dist/js/"));
    src("js/**-min.js").pipe(dest("dist/js/"));
  done();
}

function buildIMG(done) {
  src("img/**/**")
  .pipe(tinypng({key: '7fp3ZGtHDZ7N3yb0hj2tXlyThL4N69WZ'}))
  .pipe(dest("dist/img/"));
  src("img/**/*.svg")
  .pipe(dest("dist/img/"));
  done();
}

function buildPHP(done) {
  src("**.php")
    .pipe(dest("dist/"));
  src("phpmailer/**/**.php")
    .pipe(dest("dist/phpmailer"));
  src("php/**/**.php")
    .pipe(dest("dist/php"));
  done();
}

function buildFONTS(done) {
  src("fonts/**/**")
    .pipe(dest("dist/fonts"))
  done();
}

function buildVIDEO(done) {
  src("video/**/**")
    .pipe(dest("dist/video"))
  done();
}

exports.build = series(buildCSS, builJS, buildHTML, buildPHP, buildIMG, buildFONTS, buildVIDEO);