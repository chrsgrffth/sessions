<script>

export default {
  name: 'Authorization',

  mounted () {
    // If there is no access token store, we're not authorized.
    if (localStorage.getItem('accessToken') == null) {
      // Not quite sure why spotify returns with a hash instead of a query param.
      if (this.$route.hash.indexOf('access_token') == -1) {
        var client_id = window.__env.clientId;
        var redirect_uri = 'http://playlists.dev/auth';
        var scope = 'playlist-modify-public playlist-read-private user-read-email';

        // Got to Spotify for authorization.
        window.open('https://accounts.spotify.com/authorize' +
          '?client_id=' + encodeURIComponent(client_id) +
          '&redirect_uri=' + encodeURIComponent(redirect_uri) +
          '&scope=' + encodeURIComponent(scope) +
          '&response_type=token');
      }
      else {
        // Again, not sure why it's a hash; but, format the access token.
        var hash = this.$route.hash.replace('#access_token=','');

        // Set it local storage.
        localStorage.setItem('accessToken', hash);

        // Go back to the main page.
        this.$router.push('/')
      }
    }
  },

}

</script>

<template>
  <div>
    <p>Authorized</p>
  </div>
</template>