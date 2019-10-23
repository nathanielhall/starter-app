import React, { FC } from 'react'

//@todo: Issue with commas here! fix this.
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
