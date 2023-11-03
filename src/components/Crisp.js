'use client'

import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('58b1471e-413e-4766-b017-4e1088c6beac')
  })

  return null
}

export default CrispChat
