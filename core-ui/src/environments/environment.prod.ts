export const environment = {
  production: true,
  initiallyLoadedMicroFrontends: ['mf-angular'],
  microFrontends: {
    'mf-angular': {
      name: 'mf-angular',
      includeStyle: false,
      mfUrl: 'https://microfrontend-mf-angular.surge.sh',
    },
    'mf-angular-ondemand': {
      name: 'mf-angular-ondemand',
      includeStyle: false,
      mfUrl: 'https://microfrontend-mf-angular-ondemand.surge.sh',
    },
  },
};
