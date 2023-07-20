const { flatMapSeries } = require('async');
const {src, dest, parallel, series, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const svgSprite = require('gulp-svg-sprite');
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const del = require('del');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-uglify-es').default
const { init } = require('browser-sync');
const tiny = require('gulp-tinypng-compress');



const fonts = () => {
    src('./src/fonts/**.ttf')
    .pipe(ttf2woff())
    .pipe(dest('./app/fonts'))
    return src('./src/fonts/**.ttf')
    .pipe(ttf2woff2())
    .pipe(dest('./app/fonts'))
}

const svgSprites = () => {
    return src('./src/img/**.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: "../sprite.svg"
            }
        }
    }))
    .pipe(dest('./app/img'))
}

// sourcemap, rename, autoprefixer, cleanCSS, browser-sync
const styles = () => {
    return src('./src/css/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', notify.onError()))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer({
            cascade: false,
        }))
        .pipe(cleanCSS({
            level:2
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./app/css/'))
        .pipe(browserSync.stream());
}

const htmlInclude = () => {
    return src(['./src/index.html', './src/cooperation.html', './src/catalog.html', './src/card.html'])
    .pipe(fileinclude({
        prefix: '@',
      basepath: '@file'
    }))
    .pipe(dest('./app'))
    .pipe(browserSync.stream());
}

const imgToApp = () => {
    return src(['./src/img/**.jpg', './src/img/**png', './src/img/**.jpeg', './src/img/**.svg'])
        .pipe(dest('./app/img'))
}


const jsToApp = () => {
    return src(['./src/js/*.js'])
        .pipe(dest('./app/js'))
}
const fontsToApp = () => {
    return src(['./src/fonts/**'])
        .pipe(dest('./app/fonts'))
}

const icoToApp = () => {
    return src(['./src/img/*.ico'])
    .pipe(dest('./app/img'))
}

const csstoApp = () => {
    return src(["./src/css/*.css"])
    .pipe(dest('./app/css'))
}

const resources = () => {
    return src('./src/sotr/**')
    .pipe(dest('./app/sotr'))
}

const clean = () => {
    return del(['app/*'])
}

const scripts = () => {
    return src('./src/js/main.js')
    .pipe(webpackStream({
        output: {
            filename: 'main.js',
        },
        module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              }
            ]
          }
    }))
    .pipe(sourcemaps.init())
    .pipe(uglify().on('error', notify.onError()))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./app/js'))
    .pipe(browserSync.stream());

}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });

    watch('./src/css/**/*.scss', styles);
    watch('./src/index.html', htmlInclude);
    watch('./src/cooperation.html', htmlInclude);
    watch('./src/catalog.html', htmlInclude);
    watch('./src/card.html', htmlInclude);
    watch('./src/img/**.jpg', imgToApp);
    watch('./src/img/**.png', imgToApp);
    watch('./src/img/**.jpeg', imgToApp);
    watch('./src/js/*.js', jsToApp);
    watch('./src/img/*.ico', icoToApp)
    watch('./src/img/**.svg', svgSprites);
    watch('./src/resources/**', resources)
    watch('./src/fonts/**.ttf', fonts)
    watch('./src/js/**/*.js', scripts);
}

exports.styles = styles;
exports.watchFiles = watchFiles;
exports.fileInclude = htmlInclude;



exports.default = series(clean, parallel(htmlInclude, scripts, fonts, resources, imgToApp, jsToApp, icoToApp, fontsToApp, csstoApp, svgSprites),styles, watchFiles);

const tinypng = () => {
    return src(['./src/img/**.jpg', './src/img/**.png', './src/img/**.jpeg'])
    .pipe(tiny({
        key: 'd8GwJ365g09Lqt6jFtY3xB4wwBdrQNtQ',
    }))
	.pipe(dest('./app/img'))
}

const stylesBuild = () => {
    return src('./src/css/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', notify.onError()))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(autoprefixer({
            cascade: false,
        }))
        .pipe(cleanCSS({
            level:2
        }))
        .pipe(dest('./app/css/'))
}

const scriptsBuild = () => {
    return src('./src/js/main.js')
    .pipe(webpackStream({
        output: {
            filename: 'main.js',
        },
        module: {
            rules: [
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
              }
            ]
          }
    }))
    .pipe(uglify().on('error', notify.onError()))
    .pipe(dest('./app/js'))

}

exports.build = series(clean, parallel(htmlInclude, scriptsBuild, fonts, resources, jsToApp, fontsToApp, svgSprites),stylesBuild, tinypng);