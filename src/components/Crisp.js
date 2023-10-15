'use client'

import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('58b1471e-41')
  })

  return null
}

export default CrispChat
