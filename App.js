import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './pages/Home';
import DetailsScreen from './pages/Details';

// 定义导航器 可定义默认
const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
},
{
  initialRouteName: 'Home',
}

);

// 定义导航容器 定义默认页面
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
// 等价于
// export default createAppContainer(AppNavigator);