// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: 'app.js'
  },

  stylesheets: {
    joinTo: 'app.css',
    sourceFiles: ['init.scss']
  },

  templates: {
    joinTo: 'app.js'
  }
};

exports.npm = {
  aliases: {
    'vue': 'vue/dist/vue.js'
  }
}