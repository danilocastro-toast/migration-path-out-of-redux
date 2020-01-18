import React from 'react'
import styled from 'styled-components'


const NumberStoreLayout = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content auto;
  grid-gap: 10px;
  justify-content: center;
  align-items: space-evenly;

  button {
    justify-self: center;
    width: min-content;
    padding: 0.5rem;
  }

  .NumberStoreLayout__numbers {
    grid-column: span 2;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    justify-content: space-evenly;
    align-items: center;

    span {
      text-align: center;
    }
  }
`

export default function NumberStore(props) {
  const {
    current,
    previous,
    next,
    increment: onIncrement,
    decrement: onDecrement
  } = props
  return (
    <NumberStoreLayout>
      <button type="button" onClick={onIncrement}>Increment</button>
      <button type="button" onClick={onDecrement}>Decrement</button>
      <div className="NumberStoreLayout__numbers">
        <span>{previous}</span>
        <span>{current}</span>
        <span>{next}</span>
      </div>
    </NumberStoreLayout>
  )
}
