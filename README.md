# vuetify-scss

[![npm](https://img.shields.io/npm/v/vuetify-scss.svg?label=version)](https://www.npmjs.com/package/vuetify-scss)
[![npm](https://img.shields.io/npm/dt/vuetify-scss.svg)](https://www.npmjs.com/package/vuetify-scss)
[![GitHub issues](https://img.shields.io/github/issues/nmsmith22389/vuetify-scss.svg)](https://github.com/nmsmith22389/vuetify-scss/issues)

All of the Vuetify styles converted into Sass. **No more Stylus!** 🎉

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
- [Usage](#usage)
    - [Changing variables](#changing-variables)
    - [Vuetify Compatibility](#vuetify-compatibility)
    - [Added / Changed Variables](#added--changed-variables)
    - [Helper / Utility Mixins and Functions](#helper--utility-mixins-and-functions)
- [Info](#info)
    - [Changes](#changes)
    - [Versioning](#versioning)
    - [Authors](#authors)
    - [License](#license)
    - [Acknowledgments](#acknowledgments)

## Getting Started

### Prerequisites

Of course, to use `vuetify-scss` you need to install [Vuetify][vuetify].

```bash
npm install vuetify --save-dev
```

### Installing

To start using `vuetify-scss` you first need to install it using npm.

```bash
npm install vuetify-scss --save-dev
```

After installing, import `vuetify-scss`'s `.scss` files into your own.

```scss
@import '~vuetify-scss';
```

Thats's it! Now you have all the fun of [Vuetify][vuetify] with the awesomeness of Sass!

## Usage

### Changing variables

To change the default variables, simply define them before `vuetify-scss` is imported.

Example:
```scss
// Your variables file where you override the
//  default Vuetify variables.
@import 'variables';

// Then import vuetify-scss.
@import '~vuetify-scss';
```

### Vuetify Compatibility
To find out which version of [vuetify-scss][vuetify-scss] corresponds to which version of [vuetify][vuetify], see the [compatibility table][compatibility].

### Added / Changed Variables

> **vuetify-scss** has a few things that have been added or changed when compared to the styles in Vuetify. *(such as variables and mixins)*

Here is a list of the added / changed variables:

| Variable              | Default Value | Description                                                                                                                                                                                                           |
| --------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$font-size-root`     | `16px`        | This is the value the [`rem()`](#helper--utility-mixins-and-functions) mixin is based on when converting pixel units to rem.<br>*The original Vuetify behavior of this variable has been moved to `$body-font-size`.* |
| `$body-font-size`     | `14px`        | This variable dictates the base font size style.<br>*This is the same behavior as `$font-size-root` in the normal Vuetify styles.*                                                                                    |
| `$heading-style-tags` | `false`       | If true, also styles the `h1` - `h6` tags in addition to the `.display-1`, `.headline`, etc. tags.                                                                                                                    |
| `$values-use-rem`     | `true`        | If true, all measurements in the styles are converted to rem units, otherwise styles use px units.                                                                                                                    |

### Helper / Utility Mixins and Functions

**vuetify-scss** also adds some helper / utility mixins and functions that you can use to help when writing your own styles.

| Mixin / Function             | Example                                                | Description                                                                                                                                |
| ---------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `rem(value)`                 | `font-size: rem(14px);`                                | Converts `value` into rem or rem/px units into px if `$values-use-rem` is false.<br>Also accepts lists *(i.e. `rem(6px 12px 24px 48px)`)*. |
| `get-color(palette, shade)`  | `bg-color: get-color($blue, darken-1);`                | Gets a color from a color palette.<br>Also takes the Material Design form *(i.e. `get-color(blue, 600)`)*.                                 |
| `map-deep-get(map, keys...)` | `color: map-deep-get($material-light, text, primary);` | Gets a value from a nested map.                                                                                                            |
| `breakpoint(breakpoint)`     | `@include breakpoint(md-and-up) { /* styles */ }`      | A shortcut mixin to have a style only apply to a certain breakpoint.                                                                       |


## Info

### Changes
To see a list of each version and it's changes, check out the [releases][releases] page.

### Versioning

This project uses the [Angular commit convention][angular convention] and is automatically generated by [conventional-changelog][conventional changelog].

We use [SemVer][semver] for versioning. For the versions available, see the [tags on this repository][tags].

### Authors

* **Neil Smith** - *Creator*

See also the list of [contributors][contributors] who participated in this project.

### License

This project is licensed under the MIT License - see the [LICENSE.md][license] file for details

### Acknowledgments

All thanks goes to [Vuetify][vuetify] for their amazing framework!

[vuetify]: https://vuetifyjs.com/
[vuetify-scss]: https://github.com/nmsmith22389/vuetify-scss/
[compatibility]: COMPATIBILITY.md
[releases]: https://github.com/nmsmith22389/vuetify-scss/releases
[tags]: https://github.com/nmsmith22389/vuetify-scss/tags
[contributors]: https://github.com/nmsmith22389/vuetify-scss/graphs/contributors
[license]: LICENSE.md
[angular convention]: https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog-angular/README.md
[conventional changelog]: https://github.com/conventional-changelog/conventional-changelog
[semver]: http://semver.org/
