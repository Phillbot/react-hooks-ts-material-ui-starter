import moment from "moment";

const InitialState = {
  date: `${moment()
    .startOf("month")
    .format("YYYY-MM-DD HH:mm:ss")},${moment()
    .endOf("day")
    .format("YYYY-MM-DD HH:mm:ss")}`,
  year: moment().format("YYYY"),
  month: moment().format("MM"),
};

export const monthAndYearSelectReducer = (
  state = InitialState,
  action: any
) => {
  switch (action.type) {
    case "MONTH":
      return { ...state, month: action.payload };
    case "YEAR":
      return { ...state, year: action.payload };
    default:
      return state;
  }
};

export const selectDatesReducer = (state = InitialState, action: any) => {
  switch (action.type) {
    case "SET_DATE":
      return { ...state, date: action.payload };
    default:
      return state;
  }
};
