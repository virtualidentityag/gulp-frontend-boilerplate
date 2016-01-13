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

    watch: {
        interval: 500,
        debounceDelay: 750
    },

    zetzer: {
        partials: src + '/_partials',
        templates: src + '/_partials/layout',
        dot_template_settings: {
        strip: false,
            varname: 'ftf'
        },
        env: {
            package: require('./../package.json'),

            text: function(count, max) {
                if(max !== 0 && typeof max !== 'undefined' && max > count) {
                    count = Math.floor(Math.random() * max) + count;
                }
                var text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. ';
                text = text + text + text;
                return text.substr(0, count);
            },

            img: function(width, height, src) {
                var splitSrc = src.split('.');
                var fileEnding = splitSrc.pop();
                return '_assets/generated/' + splitSrc.join() + '_' + width + 'x' + height + '.' + fileEnding;
            },

            link: function() {
                return 'http://www.virtual-identity.com';
            },

            renderHbs: function(template, data) {
				require('../'+src+'/resources/js/handlebars.helper.js');
                var hbs = '../'+dev+'/resources/js/handlebars.templates.js';
                delete require.cache[require.resolve(hbs)];
                require(hbs);

                try {
                    // is data valid JSON
                    data = JSON.parse(data);
                } catch (e) {

                    try {
                        //is data a JSON file
                        var jsonString = fs.readFileSync(data, 'utf8');
                        data = JSON.parse(jsonString);
                    } catch (e) {
                        return '';
                    }

                }

                return global.configuration.data.tpl[template](data);
            },

            delayedImage: function() {
                console.log('TODO: zetzer->delayedImage()');
            }
        }
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

    uglify: {},

    minifyCss: {},

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
    }

};
