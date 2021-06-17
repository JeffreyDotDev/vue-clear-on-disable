<template>
  <div id="app">
    <form @submit.prevent>
      <div class="row">
        <h1>Toggle disable on all fields</h1>
        <div>
          <label>
            <input type="checkbox" v-model="disableAllFields" /> Disabled
          </label>
        </div>
      </div>
      <div class="row">
        <h1>Fields</h1>
      </div>
      <div class="row">
        <label>
          Text value: {{ text }}
          <input type="text" v-model="text" :disabled="disableAllFields" v-clear-on-disable />
        </label>
      </div>
      <div class="row">
        <label>
          Textarea value: {{ textarea }}
          <textarea v-model="textarea" :disabled="disableAllFields" v-clear-on-disable></textarea>
        </label>
      </div>
      <div class="row">
        <label>
          Select value: {{ select }}
          <select v-model="select" :disabled="disableAllFields" v-clear-on-disable>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </label>
      </div>
      <div class="row">
        <label>
          Checkbox value: {{ checkbox }}
          <div>
            <input type="checkbox" v-model="checkbox" :disabled="disableAllFields" v-clear-on-disable />
          </div>
        </label>
      </div>
      <div class="row">
        <label>
          Radio value: {{ radio }}
          <div>
            <input type="radio" v-model="radio" value="one" :disabled="disableAllFields" v-clear-on-disable />
            <input type="radio" v-model="radio" value="two" :disabled="disableAllFields" v-clear-on-disable />
          </div>
        </label>
      </div>
      <div class="row">
        <hr />
        <h1>Toggle clear</h1>
        <div>
          <label>
            <input type="checkbox" v-model="mustClear" /> Must clear
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" v-model="disableAllFields" /> Disabled
          </label>
        </div>
      </div>
      <div class="row">
        <h1>Fields</h1>
      </div>
      <div class="row">
        <label>
          Must clear value: {{ mustClearExample }}
          <input type="text" v-model="mustClearExample" :disabled="disableAllFields" v-clear-on-disable="mustClear" />
        </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      disableAllFields: false,

      text: 'foo',
      textarea: 'bar',
      select: 'one',
      checkbox: true,
      radio: '',

      mustClear: true,
      mustClearExample: 'Foo bar'
    }
  }
}
</script>

<style>
#app {
  margin: 0 auto;
  padding: 1rem;
  width: 512px;
  border: solid 1px #000;
  border-radius: 8px;
  font-size: large;
  font-family: sans-serif;
}

label {
  user-select: none;
}

/*
Courtesy of https://www.w3schools.com/howto/howto_css_contact_form.asp
 */

input[type=text], select, textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
