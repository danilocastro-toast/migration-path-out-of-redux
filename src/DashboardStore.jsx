import React, { useCallback } from 'react'
import styled from 'styled-components'
import Dashboard from './Dashboard'
import DashboardItem from './DashboardItem'
import FibonacciStore from './FibonacciStoreConnected'
import NumberStore from './NumberStoreConnected'
import useRenderCount from './useRenderCount'
import InternalBlock from './InternalBlock'

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
  const { incrementCombined, nextWithTimestamp } = props
  const onClick = useCallback(
    /**
     * Both actions are wrapped with individual dispatches (each store slice)
     */
    () => incrementCombined(() => {
      nextWithTimestamp(3)
    }),
    [incrementCombined, nextWithTimestamp])

  const count = useRenderCount()

  return (
    <DashboardStoreLayout>
      <Dashboard className="DashboardStoreLayout__dashboard">
        <DashboardItem className="DashboardStoreLayout__dashboard-item DashboardStoreLayout__store">
          <h1>JSON Store</h1>
          {count}
          <button type="button" onClick={onClick}>Increment Combined</button>
          <InternalBlock />
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
