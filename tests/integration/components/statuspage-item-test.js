import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('statuspage-item', 'Integration | Component | statuspage item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{statuspage-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#statuspage-item}}
      template block text
    {{/statuspage-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
