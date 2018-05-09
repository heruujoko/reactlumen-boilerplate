<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="jwt-token" content="{{ $token }}">
    <link rel="manifest" href="site.webmanifest">
    <title>Lumen React Boilerplate</title>
    <link rel="stylesheet" type="text/css" href="{{ url('/css/app.css') }}" />
  </head>
  <body>
    <div id="app"></div>
    <script src="{{ url('/js/app.js') }}"></script>
  </body>
</html>
