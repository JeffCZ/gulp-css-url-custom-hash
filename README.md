# gulp-css-url-custom-hash

## Feature

为css中url路径加上基于该文件md5的hash值，具体的拼接方法可以自己定义。

只会匹配绝对地址路径。

```css
// before:
background: url(/aa/bb/cc/dd.png)
// after:
background: url(/aa/bb/cc/dd.png?_=md5)
```

## Install

```java
npm install gulp-css-url-custom-hash
```

## Options

`customHash`

css文件中url路径的文件名与该文件hash值的拼接函数

`targetFileType`

需要获取md5值得文件类型，默认为 ['png', 'jpg', 'jpeg', 'gif', 'svg']

## Example

```javascript
var gulp var gulp = require('gulp');
var hash = require('gulp-css-url-custom-hash');

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

/*
 *
 *eg: md5 of 111.png is a6a2sgq0wqg12fg1g2
 *
 * before: 
 * .test{
 *     background-image: url(111.png);
 * }
 * .test2{
 *     background-image: url(222.jpg);
 * }
 * after:
 * .test{
 *     background-image: url(111.png?_=ec000625);
 * }
 * .test2{
 *     background-image: url(222.jpg);
 * }
 */
```

