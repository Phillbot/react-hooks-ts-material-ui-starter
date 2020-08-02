import React, { useEffect, useState } from "react";
import { getDates } from "../../../functions/year-and-month-functions";
import { useSelector, useDispatch } from "react-redux";
import { Select, MenuItem, Grid, FormControl } from "@material-ui/core";
import { getYearsCount } from "../../../functions/year-and-month-functions";
import { useStyles } from "./styles";
import { universalAction } from "../../../actions/index";

import moment from "moment";
import "moment/locale/ru";

export const YearAndMonthSelect = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const yearFromRedux = useSelector(
    (state: any) => state.monthAndYearSelectReducer.year
  );

  const monthFromRedux = useSelector(
    (state: any) => state.monthAndYearSelectReducer.month
  );

  const [month, setMonth] = useState<string[]>([]);

  const yearsData = getYearsCount();

  useEffect(() => {
    setMonth(getDates(yearFromRedux));
  }, [yearFromRedux]);

  const onChangeYearAndMonth = (e: any, param: string) => {
    const YYYY = moment(e.target.value, "YYYY").format("YYYY");
    const MM = moment(e.target.value, "MM").format("MM");

    const dttmToRedux = param === "YEAR" ? YYYY : MM;

    dispatch(universalAction(param, dttmToRedux));

    if (param === "YEAR" && YYYY === moment().format("YYYY")) {
      const monthToRedux = !month.includes(monthFromRedux)
        ? monthFromRedux
        : monthFromRedux < moment().format("MM")
        ? monthFromRedux
        : moment().format("MM");

      dispatch(universalAction("MONTH", monthToRedux));
    }
  };

  return (
    <Grid container spacing={2} alignItems="center" justify="center">
      <Grid item xs={3} md={2}>
        <FormControl className={classes.formControl}>
          <Select
            value={yearFromRedux}
            onChange={(e) => onChangeYearAndMonth(e, "YEAR")}
            className={classes.select}
            inputProps={{
              "aria-label": "year",
              classes: {
                icon: classes.icon,
              },
            }}
          >
            {yearsData.map((year: any) => {
              const isOn = yearFromRedux === year ? true : false;

              return (
                <MenuItem key={year} disabled={isOn} value={year}>
                  {year}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={2}>
        <FormControl className={classes.formControl}>
          <Select
            value={monthFromRedux}
            onChange={(e) => onChangeYearAndMonth(e, "MONTH")}
            className={classes.select}
            inputProps={{
              "aria-label": "month",
              classes: {
                icon: classes.icon,
              },
            }}
          >
            {month.map((item: any) => {
              const resMonth =
                moment(item, "MM")
                  .locale("ru")
                  .format("MMMM")[0]
                  .toUpperCase() +
                moment(item, "MM").locale("ru").format("MMMM").slice(1);

              const isOn = monthFromRedux === item ? true : false;

              return (
                <MenuItem key={item} disabled={isOn} value={item}>
                  {resMonth}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
