import { useMemo } from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'

const useClasses = (styles, props) => {
  const theme = useTheme()

  return useMemo(() => {
    const rawClasses = typeof styles === 'function'
      ? styles(theme, props)
      : styles
    const prepared = {}

    Object.entries(rawClasses).forEach(([key, value = {}]) => {
      prepared[key] = css(value, `label:${key}`)
    })

    return prepared
  }, [styles, props])
}

export default useClasses
