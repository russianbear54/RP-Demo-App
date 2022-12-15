export const useWidth = (width) => {
  let PAGE_SIZE, iconWidth,height;

  if (width > 1200) {
    PAGE_SIZE = 8;
    iconWidth = 31.5;
    height = 80;
  }

  if (width <= 1200) {
    PAGE_SIZE = 9;
    iconWidth = 25;
    height = 70;
  }

  if (width <= 1024) {
    PAGE_SIZE = 6;
    iconWidth = 22;
    height = 40;
  }

  if (width <= 428) {
    PAGE_SIZE = 8;
    iconWidth = 18;
    height = 40;

  }

  return { PAGE_SIZE, iconWidth,height };
};
