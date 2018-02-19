module.exports= function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        vue: {
            options: {
                quoteChar: "'",
                htmlmin: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: false,
                    removeComments: true,
                    removeEmptyAttributes: true,
                    removeRedundantAttributes: false,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true
                },
                indentString: '  ',
                process: false,
                separator: grunt.util.linefeed
            }
        }
    });

    grunt.loadNpmTasks('grunt-vue');

};