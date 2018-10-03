
import React from 'react';
import { render } from 'react-dom'

import createGrid from './maze'
const GRID = createGrid(5,5);

console.log('grid', GRID)


class Maze extends React.Component {
  render() {
    return(
      <section>
        {
        this.props.grid.map(row => (
          <ul className="maze-row">{
            row.map(item => <Cell item={item} />)
          }</ul>
        ))
        }
      </section>
  );
  }
}

function Cell({item}) {
  console.log(item)
  return <li>{item}</li>
}

render(<Maze grid={GRID} />, document.querySelector('main'))
