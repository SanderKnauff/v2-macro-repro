import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sample', function (hooks) {
  setupRenderingTest(hooks);

  test('Helper macros work', async function (assert) {
    await render(hbs`<HelperSample />`);

    assert.dom().hasText('It does!');
  });

  test('Js macros work', async function (assert) {
    await render(hbs`<JsSample />`);

    assert.dom().hasText('It does!');
  });
});
