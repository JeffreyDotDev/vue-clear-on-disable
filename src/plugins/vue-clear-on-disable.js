const ClearOnDisable = {
  install(Vue) {
    Vue.directive('clear-on-disable', {
      inserted(element) {
        // Create a new MutationObserver to watch the HTMLElement for changes
        new MutationObserver(mutations => {
          // Loop through all mutations once the callback is called
          mutations.forEach(mutation => {
            const target = mutation.target;

            // Check if the mutation is a disabled change and if the target is now disabled
            if (mutation.attributeName === 'disabled' && target.disabled) {
              // Check for the kind of HTMLElement, clear it's value and trigger a input or change event
              switch (target.tagName) {
                case 'INPUT':
                  switch (target.type) {
                    case 'text':
                      target.value = '';
                      target.dispatchEvent(new CustomEvent('input'));
                      break;

                    case 'checkbox':
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
