import moment from "moment";

export const getDates = (year: any) => {
  const monthNow: any =
    year === moment().format("YYYY") ? moment().format("MM") : 12;

  const monthes: string[] = [];

  for (let i = 0; i <= 11; i++) {
    let data = (monthNow - i).toString();

    if (data.length < 2) data = "0" + data;

    monthes.push(data);

    if (data === "1" || data === "01") break;
  }

  return monthes;
};

export const getYearsCount = () => {
  const yearsCount = Number(moment().format("YYYY")) - 2017;
  const yearsData = [];

  for (let i = 0; i < yearsCount; i++) {
    yearsData.push(moment().add(-i, "year").format("YYYY"));
  }

  return yearsData;
};
