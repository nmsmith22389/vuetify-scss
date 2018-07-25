# vuetify-scss

All of the Vuetify styles converted into Sass. **No more Stylus!** 🎉

## Getting Started

### Prerequisites

Of course, to use `vuetify-scss` you need to install [Vuetify](https://vuetifyjs.com/).

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

Thats's it! Now you have all the fun of [Vuetify](https://vuetifyjs.com/) with the awesomeness of Sass!

## Changing variables

To change the default variables, simply define them before `vuetify-scss` is imported.

Example:
```scss
// Your variables file where you override the
//  default Vuetify variables.
@import 'variables';
// Then import vuetify-scss.
@import '~vuetify-scss';
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Neil Smith** - *Creator*

See also the list of [contributors](https://github.com/nmsmith22389/vuetify-scss/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* All thanks goes to [Vuetify](https://vuetifyjs.com/) for their amazing framework.
