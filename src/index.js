import './assets/styles.css';
import { renderRoute } from './utils';
import { Index } from './routes';

renderRoute('#root', [
  { path: '/about', component: () => import(/* webpackChunkName: "about" */ './routes/about').then(module => module.default) },
  { path: '/contact', component: () => import(/* webpackChunkName: 'contact' */ './routes/contact').then(module => module.default) },
  { path: '/', component: () => Index }
]);

