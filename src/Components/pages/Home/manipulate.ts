export const pbCurrencyManipulateData = async (data: any) => {
  const manipulateData = data.filter((it: any) => it.ccy !== "BTC");

  manipulateData.forEach((ccy: any) => {
    ccy.buy = Number(ccy.buy).toFixed(2);
    ccy.sale = Number(ccy.sale).toFixed(2);
  });

  return manipulateData;
};
