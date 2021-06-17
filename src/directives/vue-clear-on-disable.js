function inserted(element, binding, vNode) {
  element.dataset.mustClear = binding.value ?? true;
  // Create a new MutationObserver to watch the HTMLElement for changes
  new MutationObserver(mutations => {
    // Loop through all mutations once the callback is called
    mutations.forEach(mutation => {
      const target = mutation.target;

      if (element.dataset.mustClear == "false") {
        return false;
      }

      // Check if the mutation is a disabled change and if the target is now disabled
      if ((mutation.attributeName === 'disabled' || mutation.attributeName === 'data-must-clear') && target.disabled) {
        // Check for the kind of HTMLElement, clear it's value and trigger a input or change event
        switch (target.tagName) {
          case 'INPUT':
            switch (target.type) {
              case 'text':
                console.debug('value', element.dataset.mustClear);
                target.value = '';
                target.dispatchEvent(new CustomEvent('input'));
                break;

              case 'checkbox':
                target.checked = false;
                target.dispatchEvent(new CustomEvent('change'));
                break;

              case 'radio':
                /*
                 Radio buttons work a bit strange and can not simply be turned off. For this reason v-clear-on-disable
                 on radio buttons checks for the v-model and then changes it's value directly.
                */
                if (target.checked) {
                  if (vNode.props && vNode.props['onUpdate:modelValue']) {
                    // Vue 3
                    vNode.props["onUpdate:modelValue"]();
                  } else {
                    // Vue 2
                    const vModel = vNode.data.directives.find(directive => directive.rawName === 'v-model');
                    if (vModel) {
                      vNode.context[vModel.expression] = '';
                    }
                  }
                }
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

function componentUpdated(element, binding) {
  element.dataset.mustClear = binding.value ? 'true' : 'false';
}

export default {
  // Vue 2
  inserted,
  componentUpdated,

  // Vue 3
  mounted: inserted,
  updated: componentUpdated
}
