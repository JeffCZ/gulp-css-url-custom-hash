# gulp-css-url-custom-hash

## Feature

获取css文件中的资源文件md5并拼接到文件名上，具体拼接方式可以自定义。

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

一个用来处理css文件中的资源文件md5值与该文件文件名的拼接的函数

`targetFileType`

需要处理的文件类型后缀名，默认为 ['png', 'jpg', 'jpeg', 'gif', 'svg']

## Example

```javascript
var gulp var gulp = require('gulp');
var hash = require('gulp-css-url-custom-hash');

gulp.task('default', function () {
    return gulp.src('a.css')
        .pipe(urlCustomHash({
            customHash: function(fileName, hash){ // 自定义的文件名拼接函数
                return fileName + '?_=' + hash.slice(0, 8);
            },
            targetFileType: ['png'] //只处理png文件
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
 *     background-image: url(111.png?_=a6a2sgq0);
 * }
 * .test2{
 *     background-image: url(222.jpg);
 * }
 */
```

