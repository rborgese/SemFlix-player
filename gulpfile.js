var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require("gulp-notify"),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    bulkSass = require('gulp-sass-bulk-import'),
    calc = require('postcss-calc'),
    importOnce = require('node-sass-import-once'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    postcss = require('gulp-postcss'),
    mqDedupe = require('postcss-mq-dedupe'),
    closureCompiler = require('gulp-closure-compiler'),
    liveReload = require('gulp-livereload'),
    chokidar = require('chokidar'),
    closureService = require('gulp-closure-compiler-service'),
    slice = [].slice,
    concat = require('gulp-concat'),
    runSequence = require('run-sequence'),
    debug = require('gulp-debug');

var paths = {};
paths.root = (path.resolve(__dirname)) + "/";
paths.docroot = paths.root + "public/";
paths.src = paths.root + "src/";
paths.sass = paths.src + "sass/";
paths.modules = paths.src + "js/";
paths.externs = paths.src + "externs/";
paths.vendor = paths.src + "vendor/";
paths.css = paths.docroot + "media/css/";
paths.js = paths.docroot + "media/js/";
paths.dist = paths.docroot + "dist/";
paths.closureFolder = paths.root + "/node_modules/google-closure-library/closure/";
paths.closure = [
    paths.closureFolder + "/goog/**/*.js",
    "!" + paths.closureFolder + "/goog/**/*_test.js"
];


// Sass stuff
var precision = 10;
gulp.task('sass', function() {
  return gulp.src([paths.sass + "**/*.scss"]).pipe(sourcemaps.init()).pipe(bulkSass()).pipe(sass({
    file: true,
    includePaths: [paths.spritesSrc, paths.vendor],
    precision: precision,
    importer: importOnce,
    importOnce: {
      css: true
    }
  })).on('error', logger.error).pipe(postcss([
    calc({
      precision: precision
    }), mqDedupe(), autoprefixer({
      browsers: ['last 2 versions', 'Firefox ESR', 'Opera 12.1', 'Explorer >= 9', 'Firefox >= 28']
    })
  ])).pipe(sourcemaps.write()).pipe(gulp.dest(paths.css)).pipe(notify({
    title: '✅  SASS',
    message: function(file) {
      return "OK: " + (logger.format(file.path));
    }
  }));
});

gulp.task('watch', function () {
  var watch;
  global.isWatching = true;
  watch = function(pattern, callback) {
    return chokidar.watch(pattern, {
      ignoreInitial: true
    }).on('all', function(event, path) {
      logger.log(event, gutil.colors.magenta(path));
      return callback(event, path);
    });
  };
  liveReload.listen({
    basePath: paths.docroot,
    quiet: true
  });
  watch(paths.docroot, function(event, path) {
    return liveReload.changed(path);
  });
  watch("./src/sass/**/*.scss", function() {
    return runSequence('sass');
  });
  watch('./src/js/**/*.js', function() {
    return runSequence('javascripts');
  });
});

gulp.task('watchjs', function () {
    var watch;
    global.isWatching = true;
    watch = function(pattern, callback) {
        return chokidar.watch(pattern, {
            ignoreInitial: true
        }).on('all', function(event, path) {
            logger.log(event, gutil.colors.magenta(path));
            return callback(event, path);
        });
    };
    liveReload.listen({
        basePath: paths.docroot,
        quiet: true
    });
    watch('./src/js/**/*.js', function() {
        return runSequence('javascripts');
    });
});

gulp.task('javascripts', function () {
    return gulp.src(['node_modules/google-closure-library/closure/goog/**/*.js', '!node_modules/google-closure-library/closure/goog/**/*_test.js', './src/js/**/*.js'])
        // .pipe(debug()) list files
        .pipe(sourcemaps.init())
        .pipe(closureCompiler({
            compilerPath: './node_modules/google-closure-compiler/compiler.jar',
            fileName: 'build.js',
            compilerFlags: {
                closure_entry_point: 'semFlixPlayer.init',
                compilation_level: 'WHITESPACE_ONLY',
                define: [
                    "goog.DEBUG=true",
                    "COMPILED=true"
                ],
                only_closure_dependencies: true,
                warning_level: 'VERBOSE'
            }
        }))
        .on('error', logger.error)
        .pipe(sourcemaps.write(paths.js))
        .pipe(gulp.dest(paths.js))
        .pipe(notify({
            title: '✅  JS',
            message: function(file) {
                return "OK: " + (logger.format(file.path));
            }
        }));
});

gulp.task('default', ['watch', 'sass', 'javascripts']);

var logger = {
  log: function() {
    var parts;
    parts = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return gutil.log.call(null, logger.format.apply(null, parts));
  },
  format: function() {
    var parts;
    parts = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return parts.join(' ').trim().replace(paths.root, '', 'g');
  },
  error: function(error) {
    return notify.onError({
      title: "❌  " + error.plugin,
      message: logger.format(error.message)
    }).call(this, error);
  }
};
