# vue-clear-on-disable
A small package for Vue that clears HTML form fields when they're being disabled.

## Install

### Download the package

#### yarn
```shell
yarn add clear-on-disable
```
#### npm
```shell
npm i clear-on-disable
```

### Use the package in your main file

```js
import ClearOnDisable from 'vue-clear-on-disable';
Vue.use(ClearOnDisable);
```

## Usage

### Text
```html
<input type="text" v-model="variable" :disabled="disableVariable" v-clear-on-disable />
```

### Textarea
```html
<textarea v-model="variable" :disabled="disableVariable" v-clear-on-disable></textarea>
```

### Select
```html
<select v-model="variable" :disabled="disableVariable" v-clear-on-disable>
  <option value="one">One</option>
  <option value="two">Two</option>
  <option value="three">Three</option>
</select>
```

### Checkbox
```html
<input type="checkbox" v-model="variable" :disabled="disableVariable" v-clear-on-disable />
```
