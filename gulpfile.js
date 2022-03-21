import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import nodeSass from 'sass'
import pug from 'gulp-pug'
import webpack from 'webpack-stream'
import browsersync from 'browser-sync'

const sass = gulpSass(nodeSass)
browsersync.create()

const browserSync = () => {
  browsersync.init({
    server: {
      baseDir: './dist/',
    },
    // host: "127.0.0.1",
    // online: true,
    // port: 8080,
    notify: false,
    // ui: false
  })
}

const styles = () => {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'))
    .pipe(browsersync.stream())
};

const html = () => {
  return gulp.src('./src/pug/pages/*.pug')
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest('./dist'))
    .pipe(browsersync.stream())
}

const scripts = () => {
  return gulp.src('./src/js/main.js')
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'main.min.js'
      }
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(browsersync.stream())
}


const images = () => {
  return gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./dist/img'))
}

const fonts = () => {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts/'))
}

export { html, styles, scripts, images, fonts, browserSync }

export default () => {
  html()
  styles()
  scripts()
  images()
  fonts()
  browserSync()
  gulp.watch('./src/pug/**/*.pug', html)
  gulp.watch('./src/scss/**/*.scss', styles)
  gulp.watch('./src/js/**/*.js', scripts)
  gulp.watch('./src/img/**/*', images)
  gulp.watch('./src/fonts/**/*', fonts)
}