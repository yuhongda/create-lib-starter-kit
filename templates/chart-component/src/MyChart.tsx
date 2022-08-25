import React, { forwardRef } from 'react'
import { ChartProvider, Bar } from 'echarts-readymade'
import styled from 'styled-components'
import type { Field } from 'echarts-readymade'
import type { ECharts } from 'echarts'
import { EChartsOption } from 'echarts-for-react'

const Container = styled.div`
  width: 100%;
  height: 500px;
`

export interface MyChartProps<T> {
  data: T[]
  dimension?: Field[]
  compareDimension?: Field[]
  valueList?: Field[]
  lowCodeChartOption?: any
  chartOption?: any
}

export const MyChart = forwardRef<
  {
    getEchartsInstance: () => ECharts | undefined
  },
  MyChartProps<any>
>((props, ref) => {
  const { dimension, valueList, data } = props

  return (
    <Container>
      <ChartProvider
        data={data}
        echartsOptions={{
          option: {
            title: {
              text: 'Bar Chart'
            },
            yAxis: [
              {
                axisLabel: {
                  formatter: '{value}%'
                }
              }
            ]
            // color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
          }
        }}
      >
        <Bar
          ref={ref}
          dimension={dimension}
          valueList={valueList}
          setOption={(option: EChartsOption) => {
            option.color = ["#d0f4ea","#e8fcc2","#b1cc74"]
            return option
          }}
        />
      </ChartProvider>
    </Container>
  )
})

export { MyChart as default }
