export const findlinkInText = (text: string) => {
  const re = /([^\\"=]{2}|^)((https?|ftp):\/\/\S+[^\s.,> )\];'\\"!?])/;
  const subst = '$1<a href="$2" target="_blank">$2</a>';
  return text.replace(re, subst);
};
