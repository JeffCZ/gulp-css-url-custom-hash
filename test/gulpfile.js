var gulp = require('gulp'),
    urlCustomHash = require('../index');
    
gulp.task('default', function () {
    return gulp.src('a.css')
        .pipe(urlCustomHash({
            customHash: function(fileName, hash){
                return fileName + '?_=' + hash.slice(0, 8);
            },
            targetFileType: ['png']
        }))
        .pipe(gulp.dest('dist'));
});