export const formatPrice = (price: number, tag: string = 'Rs.') => {
  return `${tag} ${price.toLocaleString('en-IN')}`;
};
