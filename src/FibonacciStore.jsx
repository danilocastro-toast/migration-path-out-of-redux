import React from 'react'
import styled from 'styled-components'
import useRenderCount from './useRenderCount'


const FibonacciStoreLayout = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content auto;
  justify-content: center;
  align-items: center;

  button {
    justify-self: center;
    width: min-content;
    padding: 0.5rem;
  }

  .FibonacciStoreLayout__serie {
    grid-column: span 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      padding: 0.5rem 0;
    }
  }
`

export default function FibonacciStore(props) {
  const {
    lastUpdate,
    serie,
    nextWithTimestamp: onNext
  } = props

  const count = useRenderCount()

  return (
    <FibonacciStoreLayout>
      <button type="button" onClick={() => onNext()}>Next Fibonacci</button>
      <button type="button" onClick={() => onNext(3)}>Next 3 Fibonacci</button>
      <div className="FibonacciStoreLayout__serie">
        {count}
        <span>{JSON.stringify(serie, null, 2)}</span>
        <span>{lastUpdate}</span>
      </div>
    </FibonacciStoreLayout>
  )
}
