import { ERouterPath } from '../types';

export const goToTest = (page: ERouterPath): void => {
  const element = document.getElementById(page);

  if (element) {
    element.scrollIntoView();
  }
};
