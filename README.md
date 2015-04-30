# modal

A modal what we use on the lostmyname website.

## Install

```
$ npm install @lostmyname/modal
```

## Usage

Include the CSS and then:

```
var modal = require('@lostmyname/modal');

modal.open(yourHtml);

setTimeout(function () {
	modal.close();
}, 10000);
```

Any HTML element with a `data-close-modal` attribute will close the modal when
clicked.

## License

Released under the MIT license.
