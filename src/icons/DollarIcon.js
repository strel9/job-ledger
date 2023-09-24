
import withDefaultColor from 'hoc/withDefaultColor'

function DollarIcon (props) {
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
        d='M21.656 18.375a5.038 5.038 0 01-5.031 5.031h-1.969v1.969a.656.656 0 11-1.312 0v-1.969h-1.969a5.038 5.038 0 01-5.031-5.031.656.656 0 111.312 0 3.719 3.719 0 003.719 3.719h5.25a3.719 3.719 0 100-7.438H12.25a5.03 5.03 0 110-10.062h1.094V2.625a.656.656 0 111.312 0v1.969h1.094a5.038 5.038 0 015.031 5.031.656.656 0 11-1.312 0 3.719 3.719 0 00-3.719-3.719h-3.5a3.719 3.719 0 100 7.438h4.375a5.038 5.038 0 015.031 5.031z'
      />
    </svg>
  )
}

export default withDefaultColor('primary.lightBlue')(DollarIcon)
