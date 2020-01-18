import React from 'react'
import styled from 'styled-components'


const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  width: 100%;
`

export default function Dashboard({ className = '', children }) {
  return (
    <DashboardLayout className={className}>
      {children}
    </DashboardLayout>
  )
}
