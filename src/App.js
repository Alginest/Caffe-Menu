import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const allCategorys = ['all', ...new Set(items.map((items) => items.category))]
console.log(allCategorys)
function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategorys)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    let newMenu = items.filter((item) => item.category === category)
    setMenuItems(newMenu)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
      </section>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={menuItems} />
    </main>
  )
}

export default App
