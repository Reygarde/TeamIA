"use strict";

const { series, src, dest, parallel, watch } = require("gulp");
const del = require("del");
const babel = require("gulp-babel");
const newer = require("gulp-newer");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const npmDist = require("gulp-npm-dist");
const imagemin = require("gulp-imagemin");
const CleanCSS = require("gulp-clean-css");
const browsersync = require("browser-sync");
const sourcemaps = require("gulp-sourcemaps");
const fileinclude = require("gulp-file-include");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));

/*
<--!----------------------------------------------------------------!-->
<--! Paths !-->
<--!----------------------------------------------------------------!-->
*/
const paths = {
	baseSrc: "src/", // source directory
	baseDist: "dist/", // destination directory
	baseSrcScss: "src/assets/scss/", // source scss directory
	baseDistScss: "dist/assets/", // build scss directory
	baseSrcAssets: "src/assets/", // source assets directory
	baseDistAssets: "dist/assets/", // build assets directory
};

/*
<--!----------------------------------------------------------------!-->
<--! Clean !-->
<--!----------------------------------------------------------------!-->
*/
const clean = function (done) {
	del.sync(paths.baseDist, done());
};

/*
<--!----------------------------------------------------------------!-->
<--! HTML !-->
<--!----------------------------------------------------------------!-->
*/
const html = function () {
	const srcPath = paths.baseSrc + "/html/*";
	const destPath = paths.baseDist + "/html/";
	return src([srcPath + "*.html"])
		.pipe(
			fileinclude({
				prefix: "@@",
				basepath: "@file",
				indent: true,
			})
		)
		.pipe(dest(destPath));
};

/*
<--!----------------------------------------------------------------!-->
<--! Theme CSS (SCSS) !-->
<--!----------------------------------------------------------------!-->
*/
const scss = async function () {
	const out = paths.baseDistScss + "css/";
	src(paths.baseSrcScss + "**/*.scss")
		.pipe(sourcemaps.init())
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(CleanCSS())
		.pipe(rename({ suffix: ".min" }))
		.pipe(sourcemaps.write("./"))
		.pipe(dest(out));
};

/*
<--!----------------------------------------------------------------!-->
<--! Vandor !-->
<--!----------------------------------------------------------------!-->
*/
const vendors = function () {
	const out = paths.baseDistAssets + "vendors/";
	return src(npmDist(), { base: "./node_modules" })
		.pipe(
			rename(function (path) {
				path.dirname = path.dirname.replace(/\/dist/, "").replace(/\\dist/, "");
			})
		)
		.pipe(dest(out));
};

/*
<--!----------------------------------------------------------------!-->
<--! Images !-->
<--!----------------------------------------------------------------!-->
*/
const images = function () {
	var out = paths.baseDistAssets + "images";
	return src(paths.baseSrcAssets + "images/**/*")
		.pipe(newer(out))
		.pipe(imagemin())
		.pipe(dest(out));
};

/*
<--!----------------------------------------------------------------!-->
<--! Javascript !-->
<--!----------------------------------------------------------------!-->
*/
const javascript = async function (done) {
	const out = paths.baseDistAssets + "js/";
	// vendors.min.js
	src([paths.baseDistAssets + "vendors/jquery/jquery.min.js", paths.baseDistAssets + "vendors/bootstrap/js/bootstrap.bundle.min.js", paths.baseDistAssets + "vendors/perfect-scrollbar/perfect-scrollbar.min.js"])
		.pipe(concat("vendors.js"))
		.pipe(uglify())
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest(out));
	// copying and minifying all other js
	src([paths.baseSrcAssets + "js/**/*.js"])
		.pipe(uglify())
		.pipe(
			babel({
				presets: ["@babel/env"],
			})
		)
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest(out));
	done();
};

/*
<--!----------------------------------------------------------------!-->
<--! BrowserSync !-->
<--!----------------------------------------------------------------!-->
*/
const initBrowserSync = function (done) {
    const startPath = "/html/login.html"; // Modifier ici pour démarrer avec login.html
    browsersync.init({
        startPath: startPath,
        server: {
            baseDir: paths.baseDist,
        },
    });
    done();
};

const reloadBrowserSync = function (done) {
	browsersync.reload();
	done();
};

/*
<--!----------------------------------------------------------------!-->
<--! Docs !--> !-->
<--!----------------------------------------------------------------!-->
*/
exports.docs = function () {
	browsersync.init({
		server: {
			baseDir: "docs",
		},
	});
};

/*
<--!----------------------------------------------------------------!-->
<--! WatchFiles !--> !-->
<--!----------------------------------------------------------------!-->
*/
function watchFiles() {
	watch(paths.baseSrc + "**/*.html", series(html, reloadBrowserSync));
	watch(paths.baseSrcScss + "**/*.scss", series(scss, reloadBrowserSync));
	watch(paths.baseSrcAssets + "js/**/*", series(javascript, reloadBrowserSync));
	watch(paths.baseSrcAssets + "images/**/*", series(images, reloadBrowserSync));
}

/*
<--!----------------------------------------------------------------!-->
<--! Producaton Tasks {cmd:gulp} !--> !-->
<--!----------------------------------------------------------------!-->
*/
exports.default = series(clean, html, vendors, parallel(scss, images, javascript), parallel(watchFiles, initBrowserSync));
