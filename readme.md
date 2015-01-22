Marry me darlin
===============
We stand before you today to witness the collaboration of two great PW's on the utmost of secret projects.

Over the course of May '13—July '13 or so, I've been secretly collaborating with one @mtthwbsh in a devious plan to convince his girlfriend to marry him. It worked.


Build Dependencies
------------
* Ruby/SASS
* Node/Grunt

Compiling assets
----------------
I've set up a Grunt config file to compile workable assets to their production versions (that means you'll need `npm` installed). You'll need to install `grunt-cli` and do `$npm install` to get going. Once done with that, there are several options for the CLI: `$grunt`, `$grunt sass`, `$grunt js`, `grunt sass-w`, `grunt js-w`, and `$grunt prod`.

By default `$grunt` compiles all assets unminified, then watches `sass/*.scss` && `js/*/*.js` for changes and recompiles. All grunt commands generate a source map for the sass and file separators for the scripts.

The `$grunt sass` && `$grunt js` commands compile only sass and js respectively and watch only those files for recompiling.

If you only want to compile specifically sass or js as a one-off, use `$grunt sass-w` (sass minus watch) or `$grunt js-w`.

For a one-off minified compile of all assets, `$grunt prod` is your man.

###JS
Dependency mangement on this is really primitive. Grunt cycles through files/directories in ascending alpha-numeric order, so if you have a script with dependencies, make sure the dependency's file path shows up before the script in question. For instance, all third party files are in `1-vend`, and all app-specific scripts are in `2-local`. jQuery is a dependency, but it's hosted on the Google CDN with a local fallback so it's not included in `love-story.js`.

Images
------
Go in the `www/img` directory. If you have workables, they should go in `pre/img`, which doesn't exist, but I'm sure you could figure out how to add it. If there is interest, I know Grunt has a tool for crunching `.png` files, but I don't feel the need to do that atm.
