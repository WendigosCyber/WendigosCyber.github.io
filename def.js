(() => {
  'use strict';

  const PKG = 'def';
  const KEY = `__kali_pkg_${PKG}`;

  window[KEY] = Object.freeze({
    manifest: Object.freeze({
      name: PKG,
      version: '1.0.0',
      description: 'Def package',
      author: 'you',
      permissions: Object.freeze({
        storage: 'none',
        cookies: 'none',
        network: 'none',
        filesystem: 'none'
      })
    }),

    install(api) {
      api.append([
        api.line(`Package ${PKG} installed successfully.`, 'accent')
      ]);
    },

    uninstall(api) {
      api.append([
        api.line(`Package ${PKG} removed successfully.`, 'muted')
      ]);
    }
  });
})();
