module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: ['**/*.css'],
      },
      js: {
        files: ['Gruntfile.js','app.js','**/*.js','**/**/*.js'],
      },
      html: {
        files: ['index.html','**/**/*.html'],
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: '.',
          hostname: '0.0.0.0',
          protocol: 'http',
          keepalive: true,
          open: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  

  grunt.registerTask('default', ['connect','watch']);

};