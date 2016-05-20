//包装函数
module.exports = function (grunt) {
    //任务配置，所有插件的配置信息
    grunt.initConfig({
        //获取 package.json 的信息
        pkg: grunt.file.readJSON('package.json'),

        meta: {
            basePath: '',
            srcPath: 'src/',
            deployPath: 'build/'
        },
        // uglify插件的配置信息，压缩js代码
        uglify: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: '<%= meta.srcPath %>index.js',
                dest: '<%= meta.deployPath %>index.js'
            }
        },
        // jshint插件的配置信息
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            build: ['Gruntfile.js', '<%= meta.srcPath %>*.js']
        },

        // compass插件的配置信息
        compass: {
            dist: {
                options: {
                    sassDir: '<%= meta.srcPath %>',
                    cssDir: '<%= meta.deployPath %>',
                    relativeAssets: true,
                    noLineComments: true
                }
            }

        },

        // // htmlmin插件的配置信息
        // htmlmin: {
        //     dist: {
        //         options: {
        //             removeComments: true,
        //             collapseWhitespace: true
        //         },
        //         files: {
        //             '<%= meta.deployPath %>index.html': '<%= meta.srcPath %>index.html'
        //         }
        //     },
        // },
        // watch插件的配置信息
        watch: {
            build: {
                files: ['<%= meta.srcPath %>*.js', '<%= meta.srcPath %>*.scss'],
                tasks: ['jshint', 'uglify', 'compass'],
                options: {
                    spawn: false
                }
            }
        }

    });

    // 告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    //grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 告诉grunt当我们在终端中输入grunt时需要做什么（注意先后顺序）
    grunt.registerTask('default', ['jshint', 'uglify', 'compass', 'watch']);
};