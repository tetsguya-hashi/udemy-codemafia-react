import React from 'react'

const Espresson = () => {
  const title = 'Expression'
  const arry = ['item1', 'item2', 'item3'];
  const hello = (pro) => pro + ' Function';
  const jsx = <h3>Hello jsx</h3>
  return (
    <div className={title.toLocaleLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{arry}</h3>
      <h3>{hello('Hello')}</h3>
      <h3>{/**画面上に表示されません */}</h3>
      {<h3>Hello JSX</h3>}
      {jsx}

    </div>
  )
}

export default Espresson