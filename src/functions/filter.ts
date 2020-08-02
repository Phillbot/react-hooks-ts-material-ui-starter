export const filterWords = (
  e: any,
  getFilterWords: Function,
  words: any[]
) => {
  let value;

  if (e.target) {
    value = e.target.value
      .replace(new RegExp("\\\\", "g"), "\\\\")
      .replace(/ /g, "|")
      .replace(/,/g, "|")
      .trim();
  } else {
    value = e
      .replace(/ /g, "|")
      .replace(new RegExp("\\\\", "g"), "\\\\")
      .replace(/,/g, "|")
      .trim();
  }

  const re = new RegExp(value, "gi");
  let filterData = words.filter((word: any) => {
    return re.test(word);
  });
  filterData = value.length < 1 ? (filterData = []) : filterData;
  getFilterWords(filterData);
};
