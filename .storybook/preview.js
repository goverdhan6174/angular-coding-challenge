import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';


setCompodocJson(docJson);


const customViewports = {
  iphoneX: {
    name: 'myDefault: adobeDefault',
    styles: {
      width: '375px',
      height: '668px',
    },
  }
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  backgrounds: {
    values: [
      {
        name: 'chihiros',
        value: 'url("https://www.teahub.io/photos/full/229-2297359_spirited-away-wallpaper-anime-aesthetic-spirited-away..png")'
      }
    ]
  },
  viewport: {
    viewports: {...INITIAL_VIEWPORTS, ...customViewports},
    defaultViewport: "iphoneX"
  },
  layout: "fullscreen"
}