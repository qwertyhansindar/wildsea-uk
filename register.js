const MODULE_ID = 'wildsea-uk';

Hooks.on('init', () => {
  game.settings.register(MODULE_ID, 'autoRegisterBabel', {
    name: 'Automatically activate translation via Babele',
    hint: 'Automatically implements Babele translations without needing to point to the directory containing the translations.',
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
    onChange: value => {
      if (value) {
        autoRegisterBabel();
      }

      window.location.reload();
    },
  });

  if (game.settings.get(MODULE_ID, 'autoRegisterBabel')) {
    autoRegisterBabel();
  }
});

function autoRegisterBabel() {
  if (typeof Babele !== 'undefined') {
    Babele.get().register({
      module: MODULE_ID,
      lang: 'uk',
      dir: 'compendium/uk',
    });
  }
}
