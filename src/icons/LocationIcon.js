
import withDefaultColor from 'hoc/withDefaultColor'

function LocationIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='28'
      height='28'
      fill='none'
      viewBox='0 0 28 28'
      {...restProps}
    >
      <path
        fill={color}
        d='M14 7.219a4.156 4.156 0 100 8.313 4.156 4.156 0 000-8.313zm0 7a2.844 2.844 0 110-5.687 2.844 2.844 0 010 5.687zm0-12.25a9.417 9.417 0 00-9.406 9.406c0 3.38 1.568 6.972 4.536 10.384a27.599 27.599 0 004.494 4.156.656.656 0 00.752 0 27.6 27.6 0 004.495-4.156c2.967-3.412 4.535-7 4.535-10.384A9.417 9.417 0 0014 1.969zm0 22.587c-1.64-1.267-8.094-6.66-8.094-13.181a8.094 8.094 0 0116.188 0c0 6.52-6.453 11.914-8.094 13.18z'
      />
    </svg>
  )
}

export default withDefaultColor('primary.lightBlue')(LocationIcon)
