import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | check-drop', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CheckDrop />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <CheckDrop>
        template block text
      </CheckDrop>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
