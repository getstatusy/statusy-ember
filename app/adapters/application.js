import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  host: 'http://localhost:8000',
  namespace: 'api/v1',
  authorizer: 'authorizer:token',

});
