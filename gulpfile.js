"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("dist/css"))
});

gulp.task("html", function () {
  return gulp.src("source/**/*.html")
  .pipe(gulp.dest("dist"))
});

gulp.task("fonts", function () {
  return gulp.src(["source/fonts/**/*.{woff,woff2}"])
    .pipe(gulp.dest("dist/fonts"));
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
  .pipe(gulp.dest("dist/img"))
});

gulp.task("js", function () {
  return gulp.src("source/js/**/*.js")
  .pipe(gulp.dest("dist/js"))
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", 'html', 'images', 'fonts', 'js'));
