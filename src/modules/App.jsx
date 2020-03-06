import React from 'react'

export const App = ({ showHeader = true }) => {
  return (
    <React.Fragment>
      {showHeader && <header>Header</header>}
      <main>Main Content here</main>
    </React.Fragment>
  )
}
