import React, { useRef } from 'react'

export default function useRenderCount() {
  const renderCountRef = useRef(0)

  renderCountRef.current += 1

  return (<div>Rendering count: {renderCountRef.current}</div>)
}
