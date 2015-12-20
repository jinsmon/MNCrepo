/*eslint no-console: 0*/

'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
var gopen = require('gulp-open');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream'); 
var concat = require('gulp-concat');
var lint = require('gulp-eslint');
var sass = require('gulp-sass');

var config = {
    production: false,
    port: 3000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/client/*.html',
        js: './src/**/*.js',
        clientJs: './src/client/**/*.js',
        mainJs: './src/client/main.js',
        dist: './dist',
        temp: './.tmp',
		sass:'./src/client/**/*.sass',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/react-bootstrap-switch/dist/css/bootstrap3/react-bootstrap-switch.min.css',
            'node_modules/rc-datepicker/examples/example.css',
            '.tmp/**/*.css'
        ],
        images: './src/client/images/**/*.*',
        fonts:['node_modules/bootstrap/dist/fonts/**.*',
               'assets/fonts/*.*'
              ]
    }
};

gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});


gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(gopen({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('bundlejs', function() {
    browserify(config.paths.mainJs, {debug: !config.production})
        .transform(babelify, {presets: ['es2015', 'react']})
        .bundle()
        .on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

//compiling sass files to css
gulp.task('sass', function (){
      
    gulp.src(config.paths.sass)
    .on('error', console.error.bind(console))
	.pipe(sass())
    .pipe(gulp.dest(config.paths.temp));
});

gulp.task('bundlecss', function() {
    gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist));
});

gulp.task('bundleimages', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());

    //publish favicon
        //gulp.src('./src/favicon.ico')
        //.pipe(gulp.dest(config.paths.dist));
});

gulp.task('bundlefonts', function() {
    gulp.src(config.paths.fonts)	
		.pipe(gulp.dest(config.paths.dist+'/fonts'));
});

gulp.task('lint', function() {
    return gulp.src(config.paths.js)
		.pipe(lint({config: '.eslintrc'}))
        .pipe(lint.format())
        .pipe(lint.failAfterError());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.clientJs, ['bundlejs']);
    gulp.watch(config.paths.js, ['lint']);
	gulp.watch(config.paths.sass, ['sass']);
});

gulp.task('set-prod', function() {
    config.production = true;
});

gulp.task('assets', ['html', 
                     'lint',
                     'bundlejs',
					 'sass',
                     'bundlecss',
                     'bundleimages',
                     'bundlefonts']);

gulp.task('build', ['set-prod', 'assets']);

gulp.task('default', ['assets', 'open', 'watch']);

 
