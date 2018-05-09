require('dotenv').config();
const mix = require('laravel-mix');

// Admin
mix.react('resources/assets/js/app.js', 'public/js').version();
mix.sass('resources/assets/sass/app.scss', 'public/css').version();



console.log("Starting webpack compilation");
