import React, { forwardRef, useState } from 'react'
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

  const dimensionData =
    dimension
      ?.filter((item: any) => !item.isCompare)
      .map((item: any) => {
        return {
          fieldKey: item.fieldKeyAlias,
          fieldName: item.fieldName
        }
      }) || []

  const compareDimensionData =
    dimension
      ?.filter((item: any) => item.isCompare)
      .map((item: any) => {
        return {
          fieldKey: item.fieldKeyAlias,
          fieldName: item.fieldName
        }
      }) || []

  const valueListData =
    valueList?.map((item: any) => {
      return {
        fieldKey: item.fieldKeyAlias,
        fieldName: item.fieldName,
        type: item.chartDataOption.type,
        yAxisIndex: item.chartDataOption.yAxisIndex,
        isPercent: item.isShowPercent,
        decimalLength: item.chartDataOption.label.decimalLength
      }
    }) || []

  return (
    <Container>
      <ChartProvider data={data}>
        <Bar
          ref={ref}
          dimension={dimensionData}
          valueList={valueListData}
          setOption={(option: EChartsOption) => {
            option.color = ['#d0f4ea', '#e8fcc2', '#b1cc74']
            return option
          }}
        />
      </ChartProvider>
    </Container>
  )
})

export { MyChart as default }
