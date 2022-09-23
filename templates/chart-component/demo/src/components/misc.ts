export type CustomChart = {
  registerName: string
  componentName: string
  url: string
  chartOption?: Record<string, any>
}

export const customCharts: CustomChart[] = [
  {
    registerName: 'my-chart',
    componentName: 'MyChart',
    url: 'https://storage.360buyimg.com/tmic-fe-test/my-chart.js',
    chartOption: {}
  }
]
