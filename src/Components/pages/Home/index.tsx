import React, { useEffect, useState } from "react";
import { Category } from "./Category";
import { useHttp } from "../../../hooks/http";
import { exampleApi } from "../../../api";
import { pbCurrencyManipulateData } from "./manipulate";
import { SimpleCenteredLoader } from "../../Shared/Loadings";
import { MainCenteredError } from "../../Shared/Errors";
import { SimpleNoDataCentered } from "../../Shared/NoData";
import { Container, Typography } from "@material-ui/core";
import { Helmet } from "react-helmet";

import moment from "moment";

export const Home = () => {
  const { getPBCurrency } = exampleApi;
  const { isLoading, error, request } = useHttp();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    let isSubscribed = true;

    (async () => {
      const result = await request(getPBCurrency);
      const manipulate = await pbCurrencyManipulateData(result);
      if (isSubscribed) {
        await setData(manipulate);
      }
    })();
    return () => {
      isSubscribed = false;
    };
  }, [request, getPBCurrency]);

  return (
    <Container fixed>
      <Helmet>
        <title>Homepage | {moment().format()} </title>
      </Helmet>

      <Typography variant="subtitle2" align="center" paragraph>
        Privatbank currency (useEffect fetch)
      </Typography>

      {!isLoading ? (
        <SimpleCenteredLoader />
      ) : error ? (
        <MainCenteredError />
      ) : data.length > 0 ? (
        data.map((item: any) => {
          const { base_ccy, ccy, buy, sale } = item;

          return (
            <Typography variant="body1" align="center" key={ccy}>
              {ccy} / {base_ccy} : {buy} / {sale}
            </Typography>
          );
        })
      ) : (
        <SimpleNoDataCentered />
      )}

      <Category />
    </Container>
  );
};
