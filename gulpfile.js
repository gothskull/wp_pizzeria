var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;


var estilos = [
  'scss/*.scss',
  './style.scss'
];
 gulp.task('sass', function() {
  return gulp.src(estilos)
    .pipe($.sass({
      outputStyle: 'nested' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('browser-sync',function(){
  var archivos = [
    './css/*.css',
    './scss/*.scss',
    './js/*.js',
    './*.php',
    './inc/*.php',
    './style.css'
  ];
  browserSync.init(archivos,{
    proxy : 'http://localhost/nueva_pizzeria/',
    notify : false
  })
});

gulp.task('default', ['sass','browser-sync'], function() {
  gulp.watch(['scss/*.scss'], ['sass']);
});
