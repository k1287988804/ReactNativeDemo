/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import Geolocation from '@react-native-community/geolocation';
// import { Alert } from 'react-native';

// Geolocation.getCurrentPosition(info => console.log(info), error => Alert.alert('报错', JSON.stringify(error)), { timeout: 20000 })

global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest

console.log('first')

AppRegistry.registerComponent(appName, () => App);
