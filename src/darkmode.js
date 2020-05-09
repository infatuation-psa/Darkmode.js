export const IS_BROWSER = typeof window !== 'undefined';

export default class Darkmode {
  constructor(options) {
    if (!IS_BROWSER) {
      return;
    }

    const defaultOptions = {
      bottom: '32px',
      right: '32px',
      left: 'unset',
      time: '0.3s',
      mixColor: '#fff',
      backgroundColor: '#fff',
      label: '',
      saveInCookies: true,
      autoMatchOsTheme: true
    };

    options = Object.assign({}, defaultOptions, options);

    const css = `
      .darkmode-layer {
        position: fixed;
        pointer-events: none;
        transition: all ${options.time} ease;
      }

      .darkmode-layer--simple {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: scale(1) !important;
      }

      .darkmode-layer--expanded {
        transform: scale(100);
        border-radius: 0;
      }

      .darkmode-layer--no-transition {
        transition: none;
      }
      
      .darkmode-background {
        position: fixed;
        pointer-events: none;
        z-index: -10;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      img, .darkmode-ignore {
        isolation: isolate;
        display: inline-block;
      }
    `;

    const layer = document.createElement('div');
    const background = document.createElement('div');

    layer.classList.add('darkmode-layer');
    background.classList.add('darkmode-background');

    const darkmodeActivated =
      window.localStorage.getItem('darkmode') === 'true';
    const preferedThemeOs =
      options.autoMatchOsTheme &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkmodeNeverActivatedByAction =
      window.localStorage.getItem('darkmode') === null;

    if (
      (darkmodeActivated === true && options.saveInCookies) ||
      (darkmodeNeverActivatedByAction && preferedThemeOs)
    ) {
      layer.classList.add(
        'darkmode-layer--expanded',
        'darkmode-layer--simple',
        'darkmode-layer--no-transition'
      );
      document.body.classList.add('darkmode--activated');
    }

    document.body.insertBefore(layer, document.body.firstChild);
    document.body.insertBefore(background, document.body.firstChild);

    this.addStyle(css);

    this.layer = layer;
    this.saveInCookies = options.saveInCookies;
    this.time = options.time;
  }

  addStyle(css) {
    const linkElement = document.createElement('link');

    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');
    linkElement.setAttribute(
      'href',
      'data:text/css;charset=UTF-8,' + encodeURIComponent(css)
    );
    document.head.appendChild(linkElement);
  }

  toggle() {
    if (!IS_BROWSER) {
      return;
    }
    const layer = this.layer;
    const isDarkmode = this.isActivated();

    layer.classList.toggle('darkmode-layer--simple');
    document.body.classList.toggle('darkmode--activated');
    window.localStorage.setItem('darkmode', !isDarkmode);
  }

  isActivated() {
    if (!IS_BROWSER) {
      return null;
    }
    return document.body.classList.contains('darkmode--activated');
  }
}