// -------------------------------------------------- //
// Gulp Plugins
// -------------------------------------------------- //
var babelify = require('babelify');
var browserify = require('browserify');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var minifyCss = require('gulp-minify-css');
var newer = require('gulp-newer');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var sequence = require('gulp-sequence');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var vinylBuffer = require('vinyl-buffer');
var vinylSourceStream = require('vinyl-source-stream');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

// -------------------------------------------------- //
// Custom Gulp Config
// -------------------------------------------------- //
var paths = require('./gulp-config');

// -------------------------------------------------- //
// Error Handling
// -------------------------------------------------- //
var onError = function(err) {
    notify.onError({
        title:    "Gulp",
        subtitle: "Failure!",
        message:  "Error: <%= error.message %>",
        sound:    "Beep"
    })(err);
    this.emit('end');
};

// -------------------------------------------------- //
// Gulp Server
// -------------------------------------------------- //
gulp.task('connect', function() {
  connect.server({
    root: 'build',
    port: '9000'
  });
});

// -------------------------------------------------- //
// Compile Sass for Development
// -------------------------------------------------- //
gulp.task('sass', function() {
  return gulp
    .src(paths.src.sass + '*.sass')
    .pipe(plumber({errorHandler: onError}))
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dev.sass))
    .pipe(connect.reload());
});

gulp.task('sass:production', function() {
  return gulp
    .src(paths.src.sass + '*.sass')
    .pipe(plumber({errorHandler: onError}))
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.production.sass));
});

// -------------------------------------------------- //
// Compile JS for Development
// -------------------------------------------------- //
gulp.task('js', function() {
  var bundler = browserify({
    entries: paths.src.js + 'application.js',
    debug: true
  });
  bundler.transform(babelify, { presets: ['es2015'] });
  bundler.bundle()
    .on('error', onError)
    .pipe(vinylSourceStream('application.js'))
    .pipe(vinylBuffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dev.js))
    .pipe(connect.reload());
});

gulp.task('js:production', function() {
  var bundler = browserify({
    entries: paths.src.js + 'application.js',
    debug: true
  });
  bundler.transform(babelify, { presets: ['es2015'] });
  bundler.bundle()
    .on('error', onError)
    .pipe(vinylSourceStream('application.js'))
    .pipe(vinylBuffer())
    .pipe(uglify())
    .pipe(gulp.dest(paths.production.js));
});

// -------------------------------------------------- //
// Copy Html for Development
// -------------------------------------------------- //
gulp.task('html', function() {
  return gulp
    .src(paths.src.root + '*.html')
    .pipe(gulp.dest(paths.dev.root))
    .pipe(connect.reload());
});

gulp.task('html:production', function() {
  return gulp
    .src(paths.src.root + '*.html')
    .pipe(gulp.dest(paths.production.root));
});

// -------------------------------------------------- //
// Copy Images for Development
// -------------------------------------------------- //
gulp.task('images', function() {
  return gulp
    .src(paths.src.img + '**/*.{svg,jpg,gif,png}')
    .pipe(plumber({errorHandler: onError}))
    .pipe(newer(paths.dev.img))
    .pipe(gulp.dest(paths.dev.img))
    .pipe(connect.reload());
});

gulp.task('images:production', function() {
  return gulp
    .src(paths.src.img + '**/*.{svg,jpg,gif,png}')
    .pipe(plumber({errorHandler: onError}))
    .pipe(imagemin())
    .pipe(gulp.dest(paths.production.img));
});

// -------------------------------------------------- //
// Copy Fonts for Development
// -------------------------------------------------- //
gulp.task('fonts', function() {
  return gulp
    .src(paths.src.fonts + '**/*.{ttf,otf,woff,woff2,svg,eot}')
    .pipe(plumber({errorHandler: onError}))
    .pipe(newer(paths.dev.fonts))
    .pipe(gulp.dest(paths.dev.fonts))
    .pipe(connect.reload());
});

gulp.task('fonts:production', function() {
  return gulp
    .src(paths.src.fonts + '**/*.{ttf,otf,woff,woff2,svg,eot}')
    .pipe(plumber({errorHandler: onError}))
    .pipe(gulp.dest(paths.production.fonts));
});

// -------------------------------------------------- //
// Clean Development Folder
// -------------------------------------------------- //
gulp.task('clean', function() {
  return gulp
    .src(paths.dev.root)
    .pipe(plumber({errorHandler: onError}))
    .pipe(clean());
});

gulp.task('clean:production', function() {
  return gulp
    .src(paths.production.root)
    .pipe(plumber({errorHandler: onError}))
    .pipe(clean());
});

// -------------------------------------------------- //
// Watch for Changes
// -------------------------------------------------- //
gulp.task('watch', function() {
  gulp.watch(paths.src.sass + '**/*.{sass,scss}', ['sass']);
  gulp.watch(paths.src.root + '*.html', ['html']);
  gulp.watch(paths.src.js + '**/*.js', ['js']);
  gulp.watch(paths.src.img + '**/*.{svg,jpg,gif,png}', ['images']);
  gulp.watch(paths.src.fonts + '**/*.{ttf,otf,woff,woff2,svg,eot}', ['fonts']);
  gulp.watch('./bower_components/**/*', function() {
    sequence(
      'clean:vendor:sass',
      'vendor:sass',
      'vendor:css',
      [
        'vendor:js',
        'vendor:images',
        'vendor:fonts'
      ],
      'sass'
    )();
  });
});

// -------------------------------------------------- //
// Register Tasks
// -------------------------------------------------- //
//** Development **//
gulp.task('default', sequence(
  ['clean'],
  ['sass',
  'js',
  'html',
  'images',
  'fonts',],
  'connect',
  'watch'
  ));

//** Production **//
gulp.task('production', sequence(
  ['clean:production'],
  ['sass:production',
  'html:production',
  'js:production',
  'images:production',
  'fonts:production']
));
