const gulp = require("gulp");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename")

function html(done) {
    gulp.src("./src/html/templates/*.ejs")
    .pipe(ejs())
    .pipe(rename(function(path) {
        path.extname = ".html"
    }))
    .pipe(gulp.dest("./dist"));
    done();

}

function watchHtml(done) {
    
}

gulp.task("dev", html);