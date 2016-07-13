<script lang="coffee">

  module.exports =
    name: "DefaultLayout"

    data: ->
      accessToken: null

    route:
      data: (transition) ->
        @$set('accessToken', transition.to.query.access_token)
        localStorage.setItem('accessToken', @accessToken)

</script>

<template>
  <h1>Hi</h1>
</template>