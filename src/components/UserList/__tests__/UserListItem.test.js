import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import UserListItem from '../UserListItem';

describe('UserListItem', () => {
  it('renders a list item with a link to the user', () => {
    const user = {id: 1, name: 'Fake User'};

    const component = renderer.create(
      <MemoryRouter>
        <UserListItem user={user} />
      </MemoryRouter>
    );

    const link = component.root.findByType('a');
    expect(link.children).toContain('Fake User');
    expect(link.props.href).toEqual('/user/1');
  });
});
