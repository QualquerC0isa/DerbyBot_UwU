import { registerRootComponent } from 'expo';

//arquivo que fala qual codigo vai abrir 
import App from './app'; // caminho do arquivo principal

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
