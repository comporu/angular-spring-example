export const randomize = (from: number, to: number): number => {

  return Math.floor(Math.random() * to) + from;

};
