/**
 * Created by pawelsrebrny on 24.05.16.
 */
module.exports = function(grunt) {

    grunt.initConfig({

        copy: {
            main: {
                files: [
                    // includes files within path
                    // {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},

                    // includes files within path and its sub-directories
                    {expand: true, src: ['node_modules/express/**'], dest: 'dist/'},

                    // makes all src relative to cwd
                    // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

                    // flattens results to a single level
                    // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
                ],
            },
        },
        uglify: {
            options: {
                mangle: false
            },
            project: {
                files: {
                    'dist/libs/libs.min.js': [
                        // 'temp/libs.js'
                        // 'node_modules/express/*.js',
                        // 'node_modules/nodemon/*.js'
                    ],
                    
                    'dist/app.min.js': [
                        'app.js',
                    ]
                    
                }
            }
        },
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', [
        'copy',
        'uglify']);

};