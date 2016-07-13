<script lang="coffee">

  module.exports = (router) ->

    router.beforeEach (transition) ->

      if !localStorage.getItem('accessToken')?

        client_id: '4914d66de46e4b9aa9432f72f190af97'
        redirect_uri: 'http://playlists.dev/auth'
        scope: 'playlist-modify-public playlist-read-private user-read-email'

        window.open('https://accounts.spotify.com/authorize' +
          '?client_id=' + encodeURIComponent(client_id) +
          '&redirect_uri=' + encodeURIComponent(redirect_uri) +
          '&scope=' + encodeURIComponent(scope) +
          '&response_type=token')

      else
        transition.next()


    # Map the routes.
    router.map

      '/':
        component: require('./source/views/index')

      '/auth':
        component: require('./source/views/auth')

</script>