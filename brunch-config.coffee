module.exports =
  files:
    javascripts:
      joinTo: 'app.js'
    stylesheets:
      joinTo: 'app.css'
      sourceFiles: ['init.scss']
    templates:
      joinTo: 'app.js'
  
  plugins:
    coffeescript:
      bare: true

    sass:
      mode: ''

