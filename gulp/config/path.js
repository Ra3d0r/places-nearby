import * as nodePath from 'path';
const folderRoot = nodePath.basename(nodePath.resolve());

const folderScr = './src';
const folderBuild = './dist';

export const path = {
	build: {
		js: `${folderBuild}/js/`,
		css: `${folderBuild}/css/`,
		html: `${folderBuild}/`,
		images: `${folderBuild}/img/`,
		svg: `${folderBuild}/svg/`,
		fonts: `${folderBuild}/fonts/`,
	},
	src: {
		js: `${folderScr}/js/index.js`,
		scss: `${folderScr}/scss/style.scss`,
		html: `${folderScr}/*.pug`,
		images: `${folderScr}/img/**/*.{jpg,jpeg,png,gif,webp,ico}`,
		imagesSVG: `${folderScr}/img/**/*.svg`,
	},
	watch: {
		js: `${folderScr}/js/**/*.js`,
		scss: `${folderScr}/scss/**/*.scss`,
		html: `${folderScr}/**/*.pug`,
		images: `${folderScr}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
	},
	clean: folderBuild,
	folderBuild,
	folderScr,
	folderRoot,
	ftp: '',
};
