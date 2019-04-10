import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';
import FontAwesome from './node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
      import MaterialIcons from './node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf';
  ...
    async componentWillMount() {
      try {
        await Font.loadAsync({
          FontAwesome,
          MaterialIcons
        });

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
