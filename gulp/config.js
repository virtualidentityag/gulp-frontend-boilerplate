var fs = require('fs');

var src  = 'app';
var dev  = '.tmp';
var dist = 'dist';


module.exports = {
    global: {
        src:  src,
        dev:  dev,
        dist: dist
    },

    zetzer: {
        partials: src + '/_partials',
        templates: src + '/_partials/layout',
        dot_template_settings: {
        strip: false,
            varname: 'ftf'
        },
        env: require('./tasks/zetzerHelper')
    },

    autoprefixer: {
        //browsers: ['last 3 versions', 'last 8 Chrome versions', 'last 8 Firefox versions' , 'Firefox ESR', 'ie 9', 'last 2 iOS versions', 'Android 4']
        browsers: ['last 1 version']
    },

    modernizr: {
        options : [
            "setClasses",
            "addTest"
        ],
	excludeTests: ['hidden']
    },

    uglify: {
        preserveComments: 'license'
    },

    cssNano: {
        safe: true
    },

    cssmin: {},

    iconfont: {
        fontName: 'Icons',
        appendUnicode: true,
        timestamp: Math.round(Date.now()/1000),
        normalize: true
    },

    iconfontCss: {
        fontName: 'Icons',
        path: src + '/resources/css/fonts/iconfont/_icons.scss',
        targetPath: '../../../../.iconfont/_icons.scss',
        fontPath: '../fonts/icons/',
        cssClass: 'icon'
    },

    connect: {
        port: 9000
    },

    handlebars: {
        templateWrap: 'Handlebars.template(<%= contents %>)',
        partialWrap: 'Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));',
        namespace: 'global.configuration.data.tpl',
        noRedeclare: true
    },

    sass: {
        includePaths: [
            'app/resources/bower_components/foundation-sites/scss/'
        ]
    }

};
