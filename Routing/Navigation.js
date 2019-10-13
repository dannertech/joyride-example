//import React  Navigation
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

//import screens for navigation
import HomeScreen from '../Screens/Home';
import FeedScreen from '../Screens/Feed';

const bottomTabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Feed: FeedScreen
})

const appContainer = createAppContainer(bottomTabNavigator);

export default appContainer;