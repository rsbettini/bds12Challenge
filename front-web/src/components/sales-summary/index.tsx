import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { Store, SalesSummaryData, PieChartConfig, SalesByGender } from '../../types';
import { formatPrice } from '../../utils/formatters';
import PieChartCard from '../pie-chart-card';
import { buildSalesbyGenderChart } from '../../helpers';

import './styles.css';

type Props = {
  store?: Store;
};

function SalesSummary({ store }: Props) {
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();
  const [totalSum, setTotalSum] = useState<SalesSummaryData>();

  const params = useMemo(() => buildFilterParams(store), [store]);

  useEffect(() => {
    makeRequest
      .get<SalesSummaryData>('/sales/summary', { params })
      .then((response) => {
        setTotalSum(response.data);
      })
      .catch(() => {
        console.error('Error to fetch sales summary');
      });
  }, [params]);

  useEffect(() => {
    makeRequest
      .get<SalesByGender[]>('/sales/by-gender', { params })
      .then((response) => {
        const newSalesByStore = buildSalesbyGenderChart(response.data);
        setSalesByGender(newSalesByStore);
      })
      .catch(() => {
        console.error('Error to fetch sales by gender');
      });
  }, [params]);

  return (
    <div className="sales-summary-container base-card">
      <div className="sales-summary-data">
        <div className="sales-summary-value-container">
          <h2 className="sales-summary-value">
            {totalSum ? formatPrice(totalSum.sum) : formatPrice(0)}
          </h2>
          <span className="sales-summary-value-label">Total de vendas</span>
        </div>
        <div className="sales-summary-chart">
          <PieChartCard name="" labels={salesByGender?.labels} series={salesByGender?.series} />
        </div>
      </div>
    </div>
  );
}

export default SalesSummary;
