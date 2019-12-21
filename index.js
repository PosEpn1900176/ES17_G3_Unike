/**
 * @format
 */
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

//import App from './src/Menu/App';
//import App from './src/Menu/Menu';

import App from './src/components/organisms/routes/index';

//import App from './src/components/pages/LogoInicial/Container/index';
//import App from './src/components/pages/Login/Container/index';
//import App from './src/components/pages/TenhoConta/Container/index';
//import App from './src/components/pages/CriarConta/Container/index';

AppRegistry.registerComponent(appName, () => App);
