var tplSearch = require('../tpl/search.string');

SPA.defineView('search', {
  html: tplSearch,
  plugins: ['delegated'],
  bindActions: {

  },
  bindEvents: {
    'beforeShow': function() {

    }
  }
});
