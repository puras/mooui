var gulp        = require('gulp');
var clean       = require('gulp-clean');
var concat      = require('gulp-concat');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');

// 执行清除操作，清除dist目录下的内容
gulp.task('clean', function() {
    console.log('run clean task');
    console.log('clean dist directory...');
    return gulp.src('dist/*').pipe(clean());
});

// 执行合并操作，合并所有的源代码至一个文件
gulp.task('concat', function() {
    console.log('run concat task');
    gulp.src(['src/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('mooui.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'));
});

//  执行压缩操作，将源代码合并后压缩
gulp.task('compress', function() {
    console.log('run uglify task');
    gulp.src(['src/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('mooui.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'));
});

// TODO
// 在合并时，可选择的去掉代码的注释
// 在压缩时，增加banner

gulp.task('default', ['clean', 'concat', 'compress'], function() {
    console.log('run default task');
});

// 在执行操作出错时，打印出错误信息
    // gulp.src('src/mooui.core.js')
    //     .pipe(uglify().on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
    //     .pipe(gulp.dest('dist'));