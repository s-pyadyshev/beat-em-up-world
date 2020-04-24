export const logger = (store: any) => (next: any) => (action: any) => {
  return next(action);
};
