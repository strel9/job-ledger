
import withDefaultColor from 'hoc/withDefaultColor'

function Logo (props) {
  const { color, ...restProps } = props

  return (
    <svg
      width='186'
      height='30'
      fill='none'
      viewBox='0 0 186 30'
      {...restProps}
    >
      <g clipPath='url(#clip0_604_20)'>
        <path
          fill='#484B4F'
          d='M7.253 23.962c-1.506 0-2.895-.276-4.167-.826C1.835 22.564.806 21.759 0 20.72l2.863-3.432c.615.805 1.262 1.42 1.94 1.843.68.403 1.411.604 2.196.604 2.1 0 3.15-1.229 3.15-3.686V1.335h5.12v14.428c0 2.754-.678 4.809-2.035 6.165-1.357 1.356-3.351 2.034-5.98 2.034zM28.154 23.835c-1.824 0-3.446-.382-4.867-1.144a8.911 8.911 0 01-3.34-3.115c-.806-1.335-1.21-2.85-1.21-4.544 0-1.716.404-3.231 1.21-4.545a8.587 8.587 0 013.34-3.114c1.421-.763 3.043-1.144 4.867-1.144 1.803 0 3.415.381 4.836 1.144 1.42.741 2.534 1.769 3.34 3.083.806 1.313 1.209 2.838 1.209 4.576 0 1.695-.403 3.21-1.209 4.544-.806 1.314-1.92 2.352-3.34 3.115-1.421.762-3.033 1.144-4.836 1.144zm0-4.068c.828 0 1.57-.19 2.227-.572a4.101 4.101 0 001.559-1.62c.382-.721.573-1.569.573-2.543 0-.996-.191-1.843-.573-2.543a4.102 4.102 0 00-1.559-1.62c-.657-.382-1.4-.572-2.227-.572s-1.57.19-2.227.572a4.327 4.327 0 00-1.59 1.62c-.382.7-.573 1.547-.573 2.543 0 .974.191 1.822.573 2.542.403.7.933 1.24 1.59 1.62.658.382 1.4.573 2.227.573zM50.972 23.835c-1.505 0-2.8-.318-3.88-.954-1.082-.635-1.91-1.6-2.482-2.892-.573-1.313-.859-2.966-.859-4.957 0-2.013.297-3.665.89-4.958.616-1.292 1.464-2.256 2.546-2.892 1.081-.635 2.343-.953 3.785-.953 1.612 0 3.054.36 4.327 1.08a7.826 7.826 0 013.054 3.051c.763 1.314 1.145 2.87 1.145 4.672 0 1.78-.382 3.326-1.145 4.64a8.05 8.05 0 01-3.054 3.082c-1.273.72-2.715 1.08-4.327 1.08zm-10.116-.255V0h4.963v9.947L45.5 15l.095 5.085v3.495h-4.74zm9.258-3.813c.827 0 1.558-.19 2.195-.572a4.1 4.1 0 001.558-1.62c.403-.721.605-1.569.605-2.543 0-.996-.202-1.843-.605-2.543a4.1 4.1 0 00-1.558-1.62c-.637-.382-1.368-.572-2.195-.572-.828 0-1.57.19-2.227.572a4.102 4.102 0 00-1.56 1.62c-.38.7-.572 1.547-.572 2.543 0 .974.191 1.822.573 2.542.382.7.901 1.24 1.559 1.62.657.382 1.4.573 2.227.573zM72.18 23.58V1.335h5.153v18.05H88.5v4.195H72.18zM99.43 23.835c-1.952 0-3.67-.382-5.154-1.144-1.463-.763-2.598-1.801-3.404-3.115-.806-1.335-1.209-2.85-1.209-4.544 0-1.716.392-3.231 1.177-4.545a8.417 8.417 0 013.277-3.114c1.378-.763 2.937-1.144 4.676-1.144 1.676 0 3.181.36 4.518 1.08a7.816 7.816 0 013.213 3.051c.784 1.314 1.177 2.892 1.177 4.735 0 .191-.011.413-.032.668-.021.233-.043.455-.064.667H93.703v-2.892h11.294l-1.909.858c0-.89-.18-1.663-.541-2.32a3.84 3.84 0 00-1.495-1.525c-.636-.382-1.379-.572-2.227-.572-.848 0-1.601.19-2.259.572-.636.36-1.134.88-1.495 1.557-.36.657-.54 1.44-.54 2.352v.762c0 .933.2 1.759.604 2.48.424.698 1.007 1.239 1.75 1.62.763.36 1.654.54 2.672.54.912 0 1.707-.137 2.386-.413a5.805 5.805 0 001.908-1.24l2.641 2.86c-.785.89-1.771 1.58-2.959 2.067-1.187.466-2.555.699-4.104.699zM118.353 23.835c-1.612 0-3.064-.36-4.358-1.08a8.284 8.284 0 01-3.086-3.083c-.742-1.314-1.113-2.86-1.113-4.64 0-1.801.371-3.358 1.113-4.672.764-1.313 1.792-2.33 3.086-3.05 1.294-.721 2.746-1.081 4.358-1.081 1.442 0 2.704.318 3.786.953 1.082.636 1.919 1.6 2.513 2.892.594 1.293.891 2.945.891 4.958 0 1.991-.286 3.644-.859 4.957-.573 1.293-1.4 2.257-2.481 2.892-1.061.636-2.344.954-3.85.954zm.859-4.068c.806 0 1.538-.19 2.195-.572a4.099 4.099 0 001.559-1.62c.403-.721.604-1.569.604-2.543 0-.996-.201-1.843-.604-2.543a4.1 4.1 0 00-1.559-1.62 4.294 4.294 0 00-2.195-.572c-.827 0-1.569.19-2.227.572a4.33 4.33 0 00-1.59 1.62c-.382.7-.573 1.547-.573 2.543 0 .974.191 1.822.573 2.542.403.7.933 1.24 1.59 1.62.658.382 1.4.573 2.227.573zm4.486 3.814v-3.496l.095-5.085-.318-5.053V0h4.963v23.58h-4.74zM141.079 30c-1.611 0-3.17-.201-4.676-.604-1.485-.381-2.725-.964-3.722-1.748l1.972-3.559c.721.593 1.633 1.06 2.736 1.398 1.124.36 2.227.54 3.309.54 1.76 0 3.032-.391 3.817-1.175.806-.784 1.209-1.95 1.209-3.496v-2.574l.318-4.29-.064-4.323V6.483h4.709V20.72c0 3.178-.827 5.52-2.482 7.024-1.654 1.504-4.029 2.256-7.126 2.256zm-.763-7.246c-1.591 0-3.033-.339-4.327-1.017a8.41 8.41 0 01-3.085-2.892c-.764-1.25-1.146-2.7-1.146-4.353 0-1.674.382-3.126 1.146-4.354a8.076 8.076 0 013.085-2.892c1.294-.678 2.736-1.017 4.327-1.017 1.442 0 2.715.296 3.817.89 1.103.572 1.962 1.472 2.577 2.7.615 1.208.923 2.766.923 4.672 0 1.886-.308 3.443-.923 4.672-.615 1.208-1.474 2.108-2.577 2.701-1.102.594-2.375.89-3.817.89zm.986-4.068c.87 0 1.644-.169 2.322-.508a4.004 4.004 0 001.591-1.494c.382-.635.573-1.366.573-2.193 0-.847-.191-1.578-.573-2.192a3.788 3.788 0 00-1.591-1.462c-.678-.36-1.452-.54-2.322-.54-.869 0-1.644.18-2.322.54a4.001 4.001 0 00-1.623 1.462c-.381.614-.572 1.345-.572 2.193 0 .826.191 1.557.572 2.192a4.236 4.236 0 001.623 1.494c.678.339 1.453.508 2.322.508zM163.8 23.835c-1.952 0-3.669-.382-5.154-1.144-1.463-.763-2.598-1.801-3.404-3.115-.806-1.335-1.209-2.85-1.209-4.544 0-1.716.393-3.231 1.177-4.545a8.415 8.415 0 013.277-3.114c1.378-.763 2.937-1.144 4.676-1.144 1.676 0 3.181.36 4.518 1.08a7.816 7.816 0 013.213 3.051c.784 1.314 1.177 2.892 1.177 4.735 0 .191-.011.413-.032.668-.021.233-.043.455-.064.667h-13.902v-2.892h11.294l-1.909.858c0-.89-.18-1.663-.541-2.32a3.833 3.833 0 00-1.495-1.525c-.636-.382-1.379-.572-2.227-.572-.848 0-1.601.19-2.259.572a3.79 3.79 0 00-1.495 1.557c-.36.657-.541 1.44-.541 2.352v.762c0 .933.202 1.759.605 2.48a4.3 4.3 0 001.75 1.62c.763.36 1.654.54 2.672.54.912 0 1.707-.137 2.386-.413a5.794 5.794 0 001.908-1.24l2.641 2.86c-.785.89-1.771 1.58-2.959 2.067-1.187.466-2.555.699-4.103.699zM175.375 23.58V6.483h4.74v4.83l-.668-1.398c.509-1.207 1.325-2.118 2.449-2.733 1.124-.635 2.492-.953 4.104-.953v4.576a5.812 5.812 0 00-.573-.032 4.356 4.356 0 00-.54-.031c-1.358 0-2.461.391-3.309 1.175-.827.763-1.241 1.96-1.241 3.591v8.073h-4.962z'
        />
        <ellipse
          cx='4.639'
          cy='4.634'
          fill='#4780ED'
          rx='3.314'
          ry='3.31'
        />
      </g>
      <defs>
        <clipPath id='clip0_604_20'>
          <path fill='#fff' d='M0 0H186V30H0z' />
        </clipPath>
      </defs>
    </svg>
  //

  )
}

export default withDefaultColor('primary.black')(Logo)
