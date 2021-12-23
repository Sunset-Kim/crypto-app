import { useMemo } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  elementId:string
}

const Portal:React.FC<PortalProps> = ({ children, elementId }) => {
  const rootElement = useMemo(() => document.getElementById(elementId), [
    elementId,
  ])

  return createPortal(children, rootElement as Element)
}

export default Portal