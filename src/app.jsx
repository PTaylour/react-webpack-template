import React from 'react'

require('normalize.css')
require('basscss/css/basscss.css')


const mockLines = [
  "This is the first line of the commentary, it has different players in it."
]

const LatestCommentary = ({lines, time}) => {

  return (
    <div>
      <header>
        <h1>Live</h1>
        <p>{time} min ago</p>
      </header>
      <div>
        {lines[0]}
      </div>
      <div>
        Footer
      </div>
    </div>
  )
}

export default class App extends React.Component {
  render() {
    return <LatestCommentary lines={mockLines} time={1} />
  }
}
