
import withDefaultColor from 'hoc/withDefaultColor'

function ArticleIcon (props) {
  const { color, ...restProps } = props

  return (

    <svg
      width='14'
      height='16'
      fill='none'
      viewBox='0 0 14 16'
      {...restProps}
    >
      <path
        fill={color}
        d='M12.389.022L2.056.008A1.25 1.25 0 00.805 1.257L.793 14.663a1.25 1.25 0 001.25 1.25l10.334.015a1.25 1.25 0 001.251-1.25L13.64 1.27A1.25 1.25 0 0012.39.022zm-.012 14.656l-10.334-.014.01-13.406 10.334.014-.01 13.406zM3.302 3.134a.625.625 0 01.626-.623l6.585.008a.625.625 0 11-.003 1.25L3.926 3.76a.625.625 0 01-.624-.626zm-.001 2.5a.625.625 0 01.625-.624l6.585.01a.625.625 0 11-.004 1.25l-6.584-.008a.625.625 0 01-.622-.627zm-.003 2.5a.625.625 0 01.627-.621l3.29.002a.625.625 0 11-.002 1.25L3.921 8.76a.625.625 0 01-.623-.626z'
      />
    </svg>
  )
}

export default withDefaultColor('primary.darkGray')(ArticleIcon)
