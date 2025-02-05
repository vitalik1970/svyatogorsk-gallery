import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser, Create, SimpleForm, TextInput, FileInput, ImageField } from 'react-admin';
import { dataProvider } from './dataProvider';

const PhotoCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="Название" />
      <FileInput source="url" label="Фото" accept="image/*">
          <ImageField source="url" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);

const AdminPanel = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="photos" list={ListGuesser} edit={EditGuesser} create={PhotoCreate} />
  </Admin>
);

export default AdminPanel;
