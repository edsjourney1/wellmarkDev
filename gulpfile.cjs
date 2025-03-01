const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;

gulp.task('buildBlockStyles', () => gulp.src('./blocks-for-dev/**/*.scss')
  .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
  .pipe(gulp.dest('./blocks')));

gulp.task('buildGlobalStyles', () => gulp.src('./styles/**/styles.scss')
  .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
  .pipe(rename({ basename: 'all', suffix: '.min' }))
  .pipe(gulp.dest('./styles')));

gulp.task('buildJS', (cb) => pipeline(
  gulp.src('./blocks-for-dev/**/*.js'),
  uglify(),
  gulp.dest('./blocks'),
  cb,
));
