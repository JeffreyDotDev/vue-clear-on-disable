# vue-clear-on-disable
A small package for Vue 2 and Vue 3 that clears HTML form fields when they're being disabled.

## Install

### Download the package

#### yarn
```shell
yarn add vue-clear-on-disable
```
#### npm
```shell
npm i vue-clear-on-disable
```

### Use the package in your main file

#### Vue 2
```js
import ClearOnDisable from 'vue-clear-on-disable';
Vue.directive('clear-on-disable', ClearOnDisable);
```

#### Vue 3
```js
createApp(App)
  .directive('clear-on-disable', ClearOnDisable)
  .mount('#app')
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

### Radio
Radio buttons work a bit strange and can not simply be turned off. For this reason `v-clear-on-disable` on radio buttons checks for the v-model and then changes it's value directly. This could cause weird behaviour but should work for most.

```html
<input type="radio" value="one" v-model="variable" :disabled="disableVariable" v-clear-on-disable />
<input type="radio" value="two" v-model="variable" :disabled="disableVariable" v-clear-on-disable />
```
