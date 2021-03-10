const defaultPluginOptions = {
  disableRadioButtonWarning: false
}

const ClearOnDisable = {
  /**
   *
   * @param Vue
   * @param pluginOptions
   * @param {Boolean} pluginOptions.disableRadioButtonWarning Disable the console warning when using v-clear-on-disable on radio buttons
   */
  install(Vue, pluginOptions) {
    pluginOptions = {...defaultPluginOptions, ...pluginOptions};

    Vue.directive('clear-on-disable', {
      inserted(element) {
        if (!pluginOptions.disableRadioButtonWarning && element.tagName === 'INPUT' && element.type === 'radio') {
          console.warn('Using v-clear-on-disable on radio buttons has a weird effect, be careful of this.');
        }

        new MutationObserver(mutations => {
          mutations.forEach(mutation => {
            const target = mutation.target;

            if (mutation.attributeName === 'disabled' && target.disabled) {
              switch (target.tagName) {
                case 'INPUT':
                  switch (target.type) {
                    case 'text':
                      target.value = '';
                      target.dispatchEvent(new CustomEvent('input'));
                      break;

                    case 'checkbox':
                    case 'radio':
                      target.checked = false;
                      target.dispatchEvent(new CustomEvent('change'));
                      break;
                  }
                  break;

                case 'SELECT':
                  target.value = '';
                  target.dispatchEvent(new CustomEvent('change'));
                  break;

                case 'TEXTAREA':
                  target.value = '';
                  target.dispatchEvent(new CustomEvent('input'));
                  break;
              }
            }
          })
        }).observe(element, {attributes: true});
      }
    });
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ClearOnDisable);
}

export default ClearOnDisable;
