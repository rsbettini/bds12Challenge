import { ApexOptions } from 'apexcharts';

export const buildPieChartConfig = (labels: string[] = [], name: string) => {
  return {
    labels,
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '18px',
        fontFamily: 'Roboto, sans-serif'
      }
    },
    colors: ['#FF7A00', '#7234F5', '#FF0000', '#337872'],
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 16,
      labels: {
        colors: ['#8D8D8D']
      },
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '16px',
      itemMargin: {
        vertical: 10
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '8px',
        fontFamily: 'Ubuntu, sans-serif',
        fontWeight: 'normal'
      }
    },
    plotOptions: {
      pie: {
        size: 400,
        donut: {
          size: '62%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 10,
              formatter: function () {
                return name;
              }
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: '10px',
              color: '#ABB1C0',
              fontFamily: 'Ubuntu, sans-serif',
              formatter: function () {
                return '';
              }
            }
          }
        }
      }
    }
  } as ApexOptions;
};
