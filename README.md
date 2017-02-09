# gulp-css-url-custom-hash

## Feature

为css中匹配的url路径加上hash值，具体的拼接方法可以自己定义。

```css
// before:
background: url(/aa/bb/cc/dd.png)
// after:
background: url(/aa/bb/cc/dd.png?_=hash)
```

## Install

```java
npm install gulp-css-url-custom-hash
```

## Options

`customHash`

url路径的文件名与该文件hash值的拼接

## Example

```javascript
var gulp var gulp = require('gulp');
var hash = require('gulp-css-url-custom-hash');

gulp.task('default', function () {
    gulp.src('src/style.css')
        .pipe(hash(
    		customHash: function(fileName, hash){
                return fileName.replace('.', '$'+hash.slice(0, 8)+'.');
            }
    	))
        .pipe(gulp.dest('dist'));
})

/*
 * eg: hash=112s51a61f849a
 * before: background: url(/aa/bb/cc/dd.png)
 * after:  background: url(/aa/bb/cc/dd$112s51a6.png)
 */
```

