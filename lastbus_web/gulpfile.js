'use strict';

var gulp = require('gulp'),
    clean = require('gulp-clean'),
    rjs = require('gulp-requirejs'),
    uglify = require('gulp-uglify');
    
var meta = {
    srcPath: '_src',
    scriptsSrcPath: '_src/js/',
    cssSrcPath: '_src/scss/',
    buildPath: 'build/assets/',
    scriptsBuildPath: 'build/assets/scripts/',
    cssBuildPath: 'build/assets/styles/',
    fontsBuildPath: 'build/assets/fonts/',
    namespace: '<%= pkg.name %>',
};
    
gulp.task('clean', function(done) {
    gulp.src(meta.scriptsBuildPath, { read : false })
      .pipe(clean( { force: true }));
    gulp.src(meta.cssBuildPath, { read : false })
      .pipe(clean( { force: true }));
    gulp.src(meta.fontsBuildPath, { read : false })
      .pipe(clean( { force: true }));
    done();
});

gulp.task('build-js', ['clean'], function() {
    gulp.src('node_modules/requirejs/require.js')
      .pipe(gulp.dest(meta.scriptsBuildPath));
    return rjs({
        baseUrl: '_src/js/app',
        mainConfigFile: '_src/js/app/root.js',
        name: 'root',
        out: 'lastbus.js',
        inlineText: true,
        pragmas: {
            debug: false,
            cacheBust: false
        },
        paths: {
          domready: '../../../node_modules/domready/ready',
          jquery: '../../../node_modules/jquery/dist/jquery',
          underscore: '../../../node_modules/underscore/underscore',
          'client-mvc': '../../../node_modules/client-mvc/client-mvc',
          mustache: '../../../node_modules/mustache/mustache',
          text: '../vendor/text'
        },
        shim: {
          jquery: { exports: '$' },
          underscore: { exports: '_' },
        },
        config: {
            moment: {
                noGlobal: true
            }
        }
    }).pipe(uglify())
      .pipe(gulp.dest(meta.scriptsBuildPath));
});

gulp.task('build', ['build-js']);

gulp.task('default', ['build']);