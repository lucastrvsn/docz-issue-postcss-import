const plugin = require('tailwindcss/plugin')(
  ({ theme, addBase, addComponents }) => {
    // IF YOU EDIT THIS REQUIRED FILE, IT WILL NOT BE RELOADED BUT GATSBY WILL TRIGGER RELOADING
    addComponents(require('./components.js')(theme));

    // IF YOU EDIT THIS, IT WILL BE RELOADED
    addComponents({
      '.button': {
        fontSize: theme('fontSize.4xl')
      }
    });
  }
);

module.exports = {
  plugin
};
