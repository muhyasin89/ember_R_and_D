import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | rental-property-type', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  test('it renders correctly for a Standalone rental', async function (assert) {
    this.set('inputValue', 'Estate');

    await render(hbs`{{rental-property-type this.inputValue}}`);

    await render(hbs`{{rental-property-type inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Standalone');
  });

  test('it renders correctly for a Community rental', async function (assert) {
    this.set('inputValue', 'Apartment');

    await render(hbs`{{rental-property-type inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Community');
  });
});
