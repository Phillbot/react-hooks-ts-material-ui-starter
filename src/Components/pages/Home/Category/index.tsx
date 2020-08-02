import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useStyles } from "../styles";
import { TimePeriod } from "../../../Shared/Dttm";
import { YearAndMonthSelect } from "../../../Shared/YearAndMonthSelect";
import { Grid, Typography, Grow } from "@material-ui/core";
import { DebounceInput } from "react-debounce-input";
import { filterWords } from "../../../../functions/filter";

export const Category = () => {
  const classes = useStyles();

  const dttm = useSelector((state: any) => state.selectDatesReducer.date);

  const startDttm = dttm.split(",")[0];
  const endDttm = dttm.split(",")[1];

  const yearFromRedux = useSelector(
    (state: any) => state.monthAndYearSelectReducer.year
  );

  const monthFromRedux = useSelector(
    (state: any) => state.monthAndYearSelectReducer.month
  );

  const [debounceInputValue, setDebounceInputValue] = useState("");
  const [filterData, setFilterData] = useState([]);

  const words = require("an-array-of-english-words").filter((d: any) =>
    /dmi/.test(d)
  );

  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDebounceInputValue(e.target.value);
    filterWords(e, setFilterData, words);
  };

  const allWords =
    filterData.length > 0 || debounceInputValue.length > 2 ? filterData : words;

  return (
    <Grow in timeout={1200}>
      <Grid container>
        <Grid item xs={12} className={classes.marginContainer}>
          <Typography variant="subtitle1" align="center">
            dttm picker
          </Typography>
        </Grid>

        <Grid container className={classes.marginContainer}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <TimePeriod />
            <Typography variant="caption" color="primary">
              Redux: {startDttm} - {endDttm}
            </Typography>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>

        <Grid item xs={12} className={classes.marginContainer}>
          <Typography variant="subtitle1" align="center" paragraph>
            Year and month picker
          </Typography>
        </Grid>

        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6} className={classes.blueGridContainer}>
            <YearAndMonthSelect />
            <Typography variant="h5" align="center" color="primary">
              Redux: {yearFromRedux} {monthFromRedux}
            </Typography>
            <Grid item xs={3}></Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.marginContainer}>
          <Typography variant="subtitle1" align="center" paragraph>
            Debounce input and filter
          </Typography>
        </Grid>

        {allWords.map((word: string) => {
          return <Typography> [ {word} ] </Typography>;
        })}

        <Grid container>
          <Grid item xs={5}></Grid>
          <Grid item xs={3} className={classes.marginContainer}>
            <DebounceInput
              minLength={2}
              debounceTimeout={200}
              id="filter"
              type="search"
              placeholder="Filter"
              onChange={filter}
              value={debounceInputValue}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </Grid>
    </Grow>
  );
};
