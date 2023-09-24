
import withDefaultColor from 'hoc/withDefaultColor'

function ArrowRightIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='24'
      height='12'
      fill='none'
      viewBox='0 0 24 12'
      {...restProps}
    >
      <path
        fill={color}
        d='M0 6a.91.91 0 00.909.91h19.704L17.611 9.9a.908.908 0 101.283 1.286l4.562-4.542c.049-.048.091-.1.127-.157l.023-.041a.66.66 0 00.042-.082l.009-.022a.677.677 0 00.031-.088c.004-.018.01-.037.013-.055a.604.604 0 00.014-.069l.005-.057a.916.916 0 00-.018-.271l-.015-.056a.684.684 0 00-.03-.089l-.009-.019v-.002a.66.66 0 00-.041-.083l-.025-.04a.609.609 0 00-.044-.064 1.059 1.059 0 00-.09-.1L18.894.813A.91.91 0 0017.611 2.1l3.002 2.99H.909A.91.91 0 000 6z'
      />
    </svg>
  )
}

export default withDefaultColor('primary.blue')(ArrowRightIcon)
