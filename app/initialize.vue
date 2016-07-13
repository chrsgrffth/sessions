<script lang="coffee">

  Vue = require 'vue'
  Router = require 'vue-router'
  Resource = require 'vue-resource'

  # Install the plugins.
  Vue.use(Router)
  Vue.use(Resource)

  # Default App Layout.
  App = require './source/app'

  # Vue.http.options.root = 'https://api.spotify.com/'

  router = new Router
    history: true
    saveScrollPosition: true

  require('./routes')(router)

  router.start App, 'body'

</script>