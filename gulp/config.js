const srcPath = 'src';
const destPath = 'assets';

const config = {
    src: {
        root: srcPath,
        sass: `${srcPath}/scss`,
        js: `${srcPath}/js`,
        images: `${srcPath}/images`,
        fonts: `${srcPath}/files/fonts`,
        iconsMono: `${srcPath}/files/icons/mono`,
        iconsMulti: `${srcPath}/files/icons/multi`,
    },

    dest: {
        root: destPath,
        html: destPath,
        css: `${destPath}/css`,
        js: `${destPath}/js`,
        fonts: `${destPath}/fonts`,
        images: `${destPath}/images`,
    },
    php: './**/*.php',

    setEnv() {
        this.isProd = process.argv.includes('--prod');
        this.isDev = !this.isProd;
    },
};

export default config;
