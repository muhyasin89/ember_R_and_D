import { Serializer } from 'miragejs';
export default function() {
    this.get('/rentals/:id', (schema, request) => {
      return schema.rentals.find(request.params.id);
    });
  }