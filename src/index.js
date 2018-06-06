import { render } from './utils';
import { Index } from './routes';

render('#root', Index);

// this code is here to fail your build if you don't have babel installed
const a = { a: 1 };
const b = { b: 2 };
console.log({ ...a, ...b });
