/**
 * Created by zhengjh on 2016/12/16.
 */
var gulp=require('gulp'),
    sass=require('gulp-sass'),
    livereload=require('gulp-livereload');

gulp.task('sass',function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('css/'))
});
gulp.task('default',function () {
    livereload.listen();
    gulp.watch('scss/**/*scss',['sass']);
});