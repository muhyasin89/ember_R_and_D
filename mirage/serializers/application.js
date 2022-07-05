// mirage/serializers/application.js
import { Serializer } from 'miragejs';

export default Serializer.extend({
  keyForAttribute(attr) {
    return dasherize(attr);
  },

  keyForRelationship(attr) {
    return dasherize(attr);
  },
});
