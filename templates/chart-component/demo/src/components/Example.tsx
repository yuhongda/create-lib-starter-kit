import React, { useState, Suspense, useEffect } from 'react'
import styled from 'styled-components'
import type { Field } from 'echarts-readymade'
// import MyChart from '../../../src'
import importUMDChart from './importUMDChart'
import { customCharts } from './misc'

const Container = styled.div`
  width: 100%;
  height: 500px;
`

export const Example: React.FC = () => {
  const data = [
    {
      gmv_VKcTuEkv: 20522666651.62307,
      dt_WPK1kQI9: '2022-01'
    },
    {
      gmv_VKcTuEkv: 5236721975.90777,
      dt_WPK1kQI9: '2022-02'
    },
    {
      gmv_VKcTuEkv: 4276083715.751069,
      dt_WPK1kQI9: '2022-03'
    },
    {
      gmv_VKcTuEkv: 3614933166.8436775,
      dt_WPK1kQI9: '2022-04'
    },
    {
      gmv_VKcTuEkv: 6129163186.654709,
      dt_WPK1kQI9: '2022-05'
    },
    {
      gmv_VKcTuEkv: 15386695192.692923,
      dt_WPK1kQI9: '2022-06'
    },
    {
      gmv_VKcTuEkv: 1720839.64962371,
      dt_WPK1kQI9: '2022-07'
    },
    {
      gmv_VKcTuEkv: null,
      dt_WPK1kQI9: '2022-08'
    }
  ]

  const dimension: Field[] = [
    {
      isShowAllBrand: false,
      isShowPercent: false,
      fieldName: 'dt',
      isCompare: false,
      isShowAllCategory: false,
      fieldKey: 'dt',
      isChannel: false,
      isUserTag: false,
      isDotValueForScatterQuadrant: false,
      isProductId: false,
      type: 'dimension|value|where',
      isMarkLine: false,
      isRoundNumber: false,
      isAssocIndexUp: false,
      isDataType: false,
      options: {
        averageOption: true,
        percentageOption: true,
        sortOption: true,
        countOption: true,
        sumOption: true
      },
      originData: {
        dragMark: '0',
        fieldName: 'dt',
        fieldCode: 'dt',
        __typename: 'FieldInfoItem',
        isDt: 1,
        isIndex: -1
      },
      fieldKeyAlias: 'dt_WPK1kQI9',
      isTimeSimplify: false,
      whereType: 'checkboxGroup',
      categoryLevel: null,
      sortField: null
    }
  ]

  const valueList: Field[] = [
    {
      isShowAllBrand: false,
      isShowPercent: false,
      fieldName: '销售额',
      isShowAllCategory: false,
      fieldKey: 'gmv',
      isChannel: false,
      chartDataOption: {
        smoothLine: false,
        label: {
          hideLabelLowerThan: 0,
          showFieldNameInLabel: false,
          show: false,
          decimalLength: 2,
          fontSize: 12,
          position: 'insideTop',
          formatType: 'decimal',
          positionPie: 'outside',
          hideLabel: false
        },
        type: undefined,
        hideLineDot: false,
        yAxisIndex: 0
      },
      isUserTag: false,
      isDotValueForScatterQuadrant: false,
      isProductId: false,
      type: 'dimension|value|where',
      selectedOption: {
        averageOption: true
      },
      isMarkLine: false,
      isRoundNumber: false,
      isAssocIndexUp: false,
      isDataType: false,
      options: {
        averageOption: true,
        percentageOption: true,
        sortOption: true,
        countOption: true,
        sumOption: true
      },
      originData: {
        dragMark: '0',
        fieldName: '销售额',
        fieldCode: 'gmv',
        __typename: 'FieldInfoItem',
        isDt: 0,
        isIndex: -1
      },
      fieldKeyAlias: 'gmv_VKcTuEkv',
      isTimeSimplify: false,
      whereType: 'checkboxGroup',
      categoryLevel: null,
      sortField: null
    }
  ]

  const [Comp, setComp] = useState<any>()
  useEffect(() => {
    ;(async () => {
      const component = await importUMDChart(customCharts[0])
      setComp(component)
    })()
  }, [])

  return (
    <Container>
      {/* <MyChart data={data} dimension={dimension} valueList={valueList} /> */}
      {Comp ? (
        <Comp
          data={data}
          dimension={dimension}
          valueList={valueList}
          {...customCharts[0].chartOption}
        />
      ) : null}
    </Container>
  )
}
