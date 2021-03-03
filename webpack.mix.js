const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
     .sourceMaps(false, 'source-map')
 */

mix.js('resources/js/index.js', 'public/js')
    .react()
    .less('resources/less/app.less', 'public/css/app.css',
        {
            lessOptions: {
            javascriptEnabled: true
            }
        })
    .sourceMaps(false, 'source-map');