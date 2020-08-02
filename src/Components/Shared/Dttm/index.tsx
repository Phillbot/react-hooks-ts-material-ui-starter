import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { universalAction } from "../../../actions/";

import DateRangePicker from "react-bootstrap-daterangepicker";
import DateRangeIcon from "@material-ui/icons/DateRange";

import "bootstrap-daterangepicker/daterangepicker.css";

export const TimePeriod = () => {
  const dttm = useSelector((state: any) => state.selectDatesReducer.date);
  const startDate = dttm.split(",")[0];
  const endDate = dttm.split(",")[1];

  const dispatch = useDispatch();
  const classes = useStyles();

  const onSelectNoSec = (e: any, picker: any) => {
    dispatch(
      universalAction(
        "SET_DATE",
        `${moment(picker.startDate)
          .startOf("day")
          .format("YYYY-MM-DD HH:mm:ss")},${moment(picker.endDate)
          .endOf("day")
          .format("YYYY-MM-DD HH:mm:ss")}`
      )
    );
  };

  const now = moment(new Date()).endOf("day").format("YYYY-MM-DD HH:mm:ss");
  const minDate = "2018-03-01";

  const localeFormat = "YYYY-MM-DD";
  const startDateShow = moment(startDate, "YYYY-MM-DD HH:mm:ss").format(
    "DD.MM.YYYY"
  );
  const endDateShow = moment(endDate, "YYYY-MM-DD HH:mm:ss").format(
    "DD.MM.YYYY"
  );

  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      locale={{
        format: localeFormat,
        applyLabel: "ОК",
        cancelLabel: "Отмена",
        customRangeLabel: "Другой период",
        monthNames: [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь",
        ],
        daysOfWeek: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
        firstDay: 1,
      }}
      onApply={onSelectNoSec}
      timePicker={false}
      timePicker24Hour={true}
      timePickerSeconds={true}
      minDate={minDate}
      maxDate={now}
      singleDatePicker={false}
      showDropdowns={true}
      showCustomRangeLabel={true}
      alwaysShowCalendars={true}
      opens="right"
      ranges={{
        Сегодня: [moment().startOf("day"), moment().endOf("day")],
        Вчера: [
          moment().subtract(1, "days").startOf("day"),
          moment().subtract(1, "days").endOf("day"),
        ],
        "Посл 7 Дней": [
          moment().subtract(6, "days").startOf("day"),
          moment().endOf("day"),
        ],
        "Посл 30 Дней": [
          moment().subtract(29, "days").startOf("day"),
          moment().endOf("day"),
        ],
        "Текущий месяц": [
          moment().startOf("month").startOf("day"),
          moment(now).endOf("day"),
        ],
        "Пред месяц": [
          moment()
            .subtract(1, "month")
            .startOf("day")
            .startOf("month")
            .endOf("day"),
          moment()
            .subtract(1, "month")
            .startOf("day")
            .endOf("month")
            .endOf("day"),
        ],
      }}
    >
      <Grid container className={classes.dttmPicker}>
        <Grid item sm={11}>
          <Typography>
            {startDateShow} - {endDateShow}
          </Typography>
        </Grid>

        <Grid item sm={1}>
          <Typography>
            <DateRangeIcon className={classes.icon} />
          </Typography>
        </Grid>
      </Grid>
    </DateRangePicker>
  );
};
