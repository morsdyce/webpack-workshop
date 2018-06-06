import './assets/styles.css';
import { renderRoute } from './utils';
import { Index } from './routes';

renderRoute('#root', [
  { path: '/about', getComponent: () => import(/* webpackChunkName: "about" */ './routes/about').then(module => module.default) },
  { path: '/contact', getComponent: () => import(/* webpackChunkName: 'contact' */ './routes/contact').then(module => module.default) },
  { path: '/', component: Index }
]);

