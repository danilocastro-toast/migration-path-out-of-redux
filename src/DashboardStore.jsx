import React, { useCallback } from 'react'
import styled from 'styled-components'
import Dashboard from './Dashboard'
import DashboardItem from './DashboardItem'
import FibonacciStore from './FibonacciStoreConnected'
import NumberStore from './NumberStoreConnected'

const DashboardStoreLayout = styled.div`
  height: 100%;
  width: 100%;

  .DashboardStoreLayout__dashboard {
    grid-gap: 1rem;
    padding: 1rem;
  }

  .DashboardStoreLayout__dashboard-item {
    padding: 0.7rem;
  }

  .DashboardStoreLayout__store {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row: span 2;

    h1, button {
      margin-bottom: 0.4rem;
    }
    button {
      padding: 0.4rem;
    }
    pre {
      width: 100%;
      overflow-y: scroll;
    }
  }
`

export default function DashboardStore(props) {
  const { incrementCombined } = props
  const onClick = useCallback(
    () => incrementCombined(3),
    [incrementCombined])

  return (
    <DashboardStoreLayout>
      <Dashboard className="DashboardStoreLayout__dashboard">
        <DashboardItem className="DashboardStoreLayout__dashboard-item DashboardStoreLayout__store">
          <h1>JSON Store</h1>
          <button type="button" onClick={onClick}>Increment Combined</button>
          <pre>
            {JSON.stringify(props, null, 2)}
          </pre>
        </DashboardItem>
        <DashboardItem className="DashboardStoreLayout__dashboard-item">
          <NumberStore />
        </DashboardItem>
        <DashboardItem className="DashboardStoreLayout__dashboard-item">
          <FibonacciStore />
        </DashboardItem>
      </Dashboard>
    </DashboardStoreLayout>
  )
}
