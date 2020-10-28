import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3164213Navigator from '../features/BlankScreen3164213/navigator';
import BlankScreen1143069Navigator from '../features/BlankScreen1143069/navigator';
import BlankScreen0143068Navigator from '../features/BlankScreen0143068/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen3164213: { screen: BlankScreen3164213Navigator },
BlankScreen1143069: { screen: BlankScreen1143069Navigator },
BlankScreen0143068: { screen: BlankScreen0143068Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
