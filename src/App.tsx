import React, { FC } from 'react'

// @todo: fix issues here
// @issue: adding commas between properties are being stripped on save
// @issue:  unexpected token parsing error occurs when no comma exists
// type AppProps = {
//   showHeader: boolean
//   showMain: boolean
// }

export const App: FC = () => {
  // const test = () => {
  //   const [show] = React.useState(false)

  //   console.log(show)
  // }

  return (
    <React.Fragment>
      <header>Header</header>
      <main>Main Content here</main>
    </React.Fragment>
  )
}
