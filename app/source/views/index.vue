<script lang="coffee">

  module.exports =

    name: "Landing"

    data: ->
      user: {}
      playlists: {}
      filterKey: null

    route:
      data: () ->
        @$http.get('https://api.spotify.com/v1/me', headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') })
          .then (response) ->
            @$set('user', response.data)

          .catch (response) ->
            console.error response

        @$http.get('https://api.spotify.com/v1/me/playlists', headers: { Authorization: 'Bearer ' + localStorage.getItem('accessToken') })
          .then (response) ->
            @$set('playlists', response.data.items)

          .catch (response) ->
            console.error response

</script>

<template>

  <header class="container mb-2 py-2 ta-right">
    <h1 class="tn-1 caps">{{ user.display_name }}</h1>
  </header>

  <div class="container">
    <div class="col-8 push-2">
      <div class="field">
        <input v-model="filterKey" type="text" placeholder="Filter playlists" class="mb-4">
      </div>
      <article v-for="playlist in playlists | filterBy filterKey " v-if="playlist.owner.id == user.id" class="mb-2 px-1">
        <h1 class="t-1 mb-1">{{ playlist.name }}</h1>
        <p class="tn-1 cg-3">{{ playlist.tracks.total }} Tracks</p>
      </article>
    </div>
  </div>

</template>