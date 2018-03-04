import { renderRoute } from './utils';
import { Index } from './routes';
import About from './routes/about';
import Contact from './routes/contact';

renderRoute('#root', [
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/', component: Index }
]);

