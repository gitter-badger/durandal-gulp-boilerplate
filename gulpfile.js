var gulp = require('gulp');
require('require-dir')('build/tasks');

gulp.task('default', ['lint', 'test', 'watch']);
