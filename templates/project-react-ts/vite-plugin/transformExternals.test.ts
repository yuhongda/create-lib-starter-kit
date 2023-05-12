import { transformExternals } from './transformExternals'
import { externals, cases } from './fixture'

describe('transform', () => {
  it('default import', () => {
    const code = `import antd from 'antd';`

    expect(transformExternals({ code, externals })).toBe(`const antd = window['antd'];`)
  })

  it('named import', () => {
    expect(transformExternals({ code: cases.namedImport.input, externals })).toBe(cases.namedImport.output)
  })

  it('named and default import', () => {
    const code = `import React, { useEffect } from 'react';`

    expect(transformExternals({ code, externals })).toBe(
      `const React = window['React'];
const {
  useEffect: useEffect
} = window['React'];`,
    )

    expect(
      transformExternals({
        code: "import React, { forwardRef, useEffect } from 'react'",
        externals,
      }),
    ).toBe(
      `const React = window['React'];
const {
  forwardRef: forwardRef,
  useEffect: useEffect
} = window['React'];`,
    )
  })

  it('* as default import', () => {
    const code = `import * as React from 'react'`

    expect(transformExternals({ code, externals })).toBe(`const React = window['React'];`)
  })

  it('type import', () => {
    const code = `import type { ReactComponent } from 'react'`

    expect(transformExternals({ code, externals })).toBe('')
  })

  it('import global window["rc-queue-anim"]', () => {
    const code = `import QueueAnim from 'rc-queue-anim'`

    expect(transformExternals({ code, externals })).toBe("const QueueAnim = window['rc-queue-anim'];")
  })

  it('global events', () => {
    const code = `import Events from 'events'`

    expect(transformExternals({ code, externals })).toBe('const Events = global.events;')
  })

  it('config globalName', () => {
    const code = `import React from 'react'`

    expect(transformExternals({ code, externals, globalName: 'globalThis' })).toBe("const React = globalThis['React'];")
  })

  it('space and windows EOL and ;', () => {
    expect(transformExternals({ code: `import React from 'react' `, externals, globalName: 'globalThis' })).toBe(
      "const React = globalThis['React'];",
    )
    expect(transformExternals({ code: `import React from 'react' ; `, externals, globalName: 'globalThis' })).toBe(
      "const React = globalThis['React'];",
    )
    expect(transformExternals({ code: `import React from 'react' ; \r\n`, externals, globalName: 'globalThis' })).toBe(
      "const React = globalThis['React'];",
    )
    expect(transformExternals({ code: `import React from "react" ; \r\n`, externals, globalName: 'globalThis' })).toBe(
      "const React = globalThis['React'];",
    )
  })

  it('with package namespace', () => {
    expect(
      transformExternals({ code: `import Sentry from '@sentry/browser' `, externals, globalName: 'globalThis' }),
    ).toBe("const Sentry = globalThis['Sentry'];")
  })

  it('commonjs require', () => {
    expect(transformExternals({ code: `require('react')`, externals, globalName: 'globalThis' })).toBe(
      "globalThis['React'];",
    )

    expect(
      transformExternals({ code: `const anime = require('rc-queue-anim')`, externals, globalName: 'globalThis' }),
    ).toBe("const anime = window['rc-queue-anim'];")

    expect(
      transformExternals({
        code: `var _react = _interopRequireWildcard(require("react"));`,
        externals,
        globalName: 'globalThis',
      }),
    ).toBe("var _react = _interopRequireWildcard(globalThis['React']);")
  })
})
