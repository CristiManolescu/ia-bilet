const short = (input: string, howLong: number) => {
  let shortTitle = input;
  if (input.length > howLong) {
    shortTitle = input.slice(0, howLong) + "...";
  } else {
    shortTitle = input;
  }
  return shortTitle;
};

export default short;
