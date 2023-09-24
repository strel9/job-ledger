
import withDefaultColor from 'hoc/withDefaultColor'

function InIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='48'
      height='48'
      fill='none'
      viewBox='0 0 48 48'
      {...restProps}
    >
      <path
        fill={color}
        d='M15.876 12.94A2.938 2.938 0 1110 12.937a2.938 2.938 0 015.876.003zm.088 5.112h-5.876v18.392h5.876V18.052zm9.285 0h-5.847v18.392h5.788v-9.651c0-5.377 7.007-5.877 7.007 0v9.651H38v-11.65c0-9.063-10.372-8.725-12.81-4.274l.059-2.468z'
      />
    </svg>
  )
}

export default withDefaultColor('primary.blue')(InIcon)
