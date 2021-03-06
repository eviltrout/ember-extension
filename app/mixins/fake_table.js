/* list-view comes with its own scrollbar
 * The header columns however are not inside list-view.  The scrollbar will
 * cause flexbox to fail to match header and content.
 * This is a hack to allow account for scrollbar width (if any)
 */

function accountForScrollbar() {
  /*jshint validthis:true */
  var outside = this.$('.list-tree').innerWidth();
  var inside = this.$('.ember-list-container').innerWidth();
  this.$('.spacer').width(outside - inside);
}

export default Ember.Mixin.create({
  _accountForScrollbar: function() {
    Ember.run.scheduleOnce('afterRender', this, accountForScrollbar);
  }.on('didInsertElement')
});
