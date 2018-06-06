export function render(selector, component, getComponent) {
  const componentToRender = getComponent ?
    getComponent() :
    Promise.resolve(component);

  componentToRender.then((componentToRender) => {
    const html = componentToRender();
    const element = document.querySelector(selector);

    if (element && html) {
      element.innerHTML = html;
    }
  }).catch(() => {
    console.warn('failed to load component');
  });
}

export function renderRoute(selector, routeConfig) {
  if (!window.onhashchange) {
    window.onhashchange = () => {
      renderRoute(selector, routeConfig);
    };
  }
  const path = window.location.hash;
  let routes = routeConfig.filter((route) => path.indexOf(route.path) !== -1);

  if (!routes.length) {
    console.warn('unable to find route, defaulting to root route');
    routes = routeConfig.filter((route) => route.path === '/');
  }

  render(selector, routes[0].component, routes[0].getComponent);
}

export function renderNavigation() {
  return `
    <ul>
      <li>
        <a href="#/">Home</a>
      </li>
      <li>
        <a href="#/about">About</a>
      </li>
      <li>
        <a href="#/contact">Contact us</a>
      </li>
    </ul>
  `;
}
