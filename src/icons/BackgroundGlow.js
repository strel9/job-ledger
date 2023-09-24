
import withDefaultColor from 'hoc/withDefaultColor'

function BackgroundGlow (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='1440'
      height='1327'
      fill='none'
      viewBox='0 0 1440 1327'
      {...restProps}
    >
      <g filter='url(#filter0_f_666_47082)' opacity='0.6'>
        <path
          fill='#EEFBFC'
          d='M1601 479c0 189.434-153.57 343-343 343S915 668.434 915 479s153.57-343 343-343 343 153.566 343 343z'
        />
        <path
          fill='#F1EEFC'
          d='M1093 355c0 171.761-139.24 311-311 311-171.761 0-311-139.239-311-311S610.239 44 782 44c171.76 0 311 139.239 311 311z'
        />
        <path
          fill='#FBEEFC'
          d='M525 479c0 143.594-116.406 260-260 260S5 622.594 5 479s116.406-260 260-260 260 116.406 260 260z'
        />
        <path
          fill='#DEE4F9'
          d='M945 703c0 125.921-102.079 228-228 228S489 828.921 489 703s102.079-228 228-228 228 102.079 228 228z'
        />
        <path
          fill='#FCEEF8'
          d='M586-27c0 206.002-166.998 373-373 373S-160 179.002-160-27 6.998-400 213-400 586-233.002 586-27z'
        />
        <path
          fill='#EEEFFC'
          d='M1258-27c0 166.79-135.21 302-302 302S654 139.79 654-27s135.21-302 302-302 302 135.21 302 302z'
        />
      </g>
      <defs>
        <filter
          id='filter0_f_666_47082'
          width='2553'
          height='2123'
          x='-556'
          y='-796'
          colorInterpolationFilters='sRGB'
          filterUnits='userSpaceOnUse'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend
            in='SourceGraphic'
            in2='BackgroundImageFix'
            result='shape'
          />
          <feGaussianBlur
            result='effect1_foregroundBlur_666_47082'
            stdDeviation='198'
          />
        </filter>
      </defs>
    </svg>

  )
}

export default withDefaultColor('primary.black')(BackgroundGlow)
