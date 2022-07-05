import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | chart_performance', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:chart-performance');
    assert.ok(route);
  });
});
