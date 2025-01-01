import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  baseUrl: `https://unique.up.railway.app`,
  production: true
};
