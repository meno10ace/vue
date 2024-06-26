<html lang="{{ str_replace('_','-',app()->getLocale()}}">
    <head>
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
     <meta name="csrf-token" content="{{ csrf_token() }}">

     <title>{{ config('app.name', 'Vue Laravel SPA') }}</title>

     <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        
        <div id="app">
            <example-component></example-component>

        </div>
        <!-- script -->
         <script src="{{ mix('/js/app.js')}}" defer></script>
    </body>

</html>