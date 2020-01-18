import React from 'react'
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
  }
`

export default function DashboardStore(props) {
  return (
    <DashboardStoreLayout>
      <Dashboard className="DashboardStoreLayout__dashboard">
        <DashboardItem className="DashboardStoreLayout__dashboard-item DashboardStoreLayout__store">
          <h1>JSON Store</h1>
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
