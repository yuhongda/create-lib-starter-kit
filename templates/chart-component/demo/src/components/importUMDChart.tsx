import type { CustomChart } from './misc'

const importUMDChart = (customChart: CustomChart): Promise<React.ReactNode> => {
  return new Promise((resolve, reject) => {
    const { componentName, url } = customChart

    const script = document.createElement('script')
    script.setAttribute('src', url)
    document.head.appendChild(script)

    script.addEventListener('load', () => {
      document.head.removeChild(script)

      const Comp = (window[componentName as any] as any).default
        ? (window[componentName as any] as any).default
        : window[componentName as any]

      resolve(Comp)
    })

    script.addEventListener('error', (error) => {
      reject(error)
    })
  })
}

export default importUMDChart
