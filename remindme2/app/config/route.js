import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import AddReminder from '../screens/AddReminder';
import Default from '../screens/Default';

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Default: {
      screen: Default,
    },
    AddReminder: {
      screen: AddReminder,
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);
