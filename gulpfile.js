var elixir = require('laravel-elixir');
elixir.config = require('./elixir/config.js');
require('laravel-elixir-vueify');

elixir(function(mix) {
    mix.copy('./node_modules/font-awesome/fonts', './skin/css/fonts')
       .copy('./node_modules/normalize.css/normalize.css', './skin/sources/sass/base/_normalize.scss')
       .sass('styles.scss')
       .browserify('app.js')
       .version(['css/styles.css', 'js/app.js']);
       // .browserSync({
       //      proxy: 'magento.dev'
       //  });
});