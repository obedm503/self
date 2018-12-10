# self

Given the [troubles](https://github.com/tc39/proposal-global/issues/32) with adding a common global reference in the spec, just use `self`. `self` already exists in browser and worker environments. This script just adds a circular reference to the already existing global in the form of `self` if it's not already there.

This package was inspired by @pluma's comments [here](https://github.com/tc39/proposal-global/issues/32#issuecomment-443280846) and [here](https://github.com/tc39/proposal-global/issues/32#issuecomment-443291102) about `self` being a red herring. Although `self` is not as pretty as `global`, it works.

## usage

```js
// universal js code
require('self');

self.console.log(self.self === self); // true
```