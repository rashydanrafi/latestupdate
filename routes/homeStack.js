import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Register from '../screens/register';


const screens = {

    Home: {
        screen: Home
    },
    

    Register: {
        screen: Register
    },
}

const HomeStack = createStackNavigator (screens);

export default createAppContainer (HomeStack);