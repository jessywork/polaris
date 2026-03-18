import { defaultTheme } from '@metyis-porto/douro-ui-react';

//add example -> readme
export const theme = {
  ...defaultTheme,
  name: 'Polaris',

  // breakpoints: {
  //   [Breakpoints.MOBILE]: 375,
  //   [Breakpoints.TABLET]: 576,
  //   [Breakpoints.DESKTOP]: 1000,
  //   [Breakpoints.DESKTOP_LARGE]: 1400,
  // },
  colors: {
    ...defaultTheme.colors,
    brand: {
      auric: '#ed5b41',
      sea: '#3c568e',
      sky: '#90A8D8',
      onyx: '#414042',
      slate: '#939598',
      moon: '#bcbec0',
      cloud: '#d1d3d4',
      stardust: '#e6e7e8',
      ash: '#f1f1f0',
      dust: '#dcd3c1',
      dune: '#f2e8dc',
      ethereal: '#f7f0e8',
      aura: '#fbf7f3',
      grey: '#edf1f3',
      gray: '#707070',
    },
  },
};

export type Theme = typeof theme;
