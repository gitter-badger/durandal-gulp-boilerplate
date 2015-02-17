# durandal-gulp-boilerplate
Common Gulp tasks for Durandal development.

`gulp clean`
Delete files from `dist`.

`gulp clean-deps`
Delete bower dependencies, from `lib` and `dist/lib`.

`gulp build`
Complete build including bower and Durandal.

`gulp build-deps`
Clean and reinstall bower dependencies:

`gulp build-bower`
Install bower dependencies and copy main files to `lib` and `dist/lib`.

`gulp build-system`
RequireJS optimise Durandal build.

`gulp build-html`
Copy html to `dist`.

`gulp cs`
JSCS code style.

`gulp lint`
JSHint linting.

`gulp test`
Karma tests.

`gulp e2e`
Protractor tests.

`gulp serve`
`gulp watch`
`gulp prepare-release`
