export const logger = () => (next: any) => (action: any) => {
  return next(action);
};
