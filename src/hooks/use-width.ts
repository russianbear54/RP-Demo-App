export const useWidth = (width) => {
  let PAGE_SIZE, iconWidth;

  if (width > 1200) {
    PAGE_SIZE = 8;
    iconWidth = 31.5;
  }

  if (width <= 1200) {
    PAGE_SIZE = 9;
    iconWidth = 25;
  }

  if (width <= 1024) {
    PAGE_SIZE = 6;
    iconWidth = 22;
  }

  if (width <= 428) {
    PAGE_SIZE = 8;
    iconWidth = 18;
  }

  return { PAGE_SIZE, iconWidth };
};
