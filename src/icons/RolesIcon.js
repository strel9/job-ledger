
import withDefaultColor from 'hoc/withDefaultColor'

function RolesIcon (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='28'
      height='28'
      fill='none'
      viewBox='0 0 28 28'
    >
      <path
        fill={color}
        d='M6.8 22.1c-.495 0-.919-.176-1.272-.53A1.73 1.73 0 015 20.3v-9.9c0-.495.176-.919.529-1.272a1.73 1.73 0 011.27-.528h3.6V6.8c0-.495.177-.919.53-1.272A1.73 1.73 0 0112.199 5h3.6c.496 0 .92.176 1.273.53.352.352.528.776.528 1.27v1.8h3.6c.495 0 .919.176 1.271.53.353.352.53.776.529 1.27v9.9c0 .495-.177.919-.53 1.272a1.73 1.73 0 01-1.27.528H6.8zm0-1.8h14.4v-9.9H6.8v9.9zm5.4-11.7h3.6V6.8h-3.6v1.8z'
      />
    </svg>
  )
}

export default withDefaultColor('primary.lightBlue')(RolesIcon)
