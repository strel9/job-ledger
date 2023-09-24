
import withDefaultColor from 'hoc/withDefaultColor'

function ArrowLeftIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='12'
      fill='none'
      viewBox='0 0 24 12'
      {...restProps}
    >
      <path
        fill={color}
        d='M24 6a.91.91 0 00-.909-.91H3.387L6.389 2.1A.908.908 0 105.106.814L.544 5.356a.892.892 0 00-.127.157l-.023.041a.666.666 0 00-.042.081c-.002.008-.006.016-.009.023a.679.679 0 00-.031.087c-.004.019-.01.037-.013.056a.573.573 0 00-.014.069l-.005.057a.91.91 0 00.018.271l.015.056a.685.685 0 00.039.107v.003a.675.675 0 00.041.083l.025.039a.611.611 0 00.044.065c.028.035.058.07.09.1l4.554 4.535A.91.91 0 006.389 9.9L3.387 6.91h19.704a.91.91 0 00.909-.91z'
      />
    </svg>
  )
}

export default withDefaultColor('primary.blue')(ArrowLeftIcon)
