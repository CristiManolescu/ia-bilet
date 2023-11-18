const short = (title: string) => {
  let shortTitle = title;
  if (title.length > 30) {
    shortTitle = title.slice(0, 30) + "..";
    console.log(shortTitle);
  } else {
    shortTitle = title;
  }
  return shortTitle;
};

export default short;
