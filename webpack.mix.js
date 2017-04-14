let mix = require('laravel-mix').mix;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
mix.styles('resources/css/custom.css', 'public/css/custom.css')
mix.styles('public/css/style.css', 'public/css/style.min.css')
