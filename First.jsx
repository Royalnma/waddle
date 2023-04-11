import React from 'react'
import { useState } from 'react'
import { people } from './People';


export const Input = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <input className='inputs' type='search' placeholder='Search by name...' onChange={(e) => setSearch(e.target.value)} />
      <div className='BlockSection'>
        {people.filter((item) =>{
          return search.toLowerCase() === '' ? item : item.firstName.toLowerCase().includes(search)
        }).map((person, key) => {
          const people = `${person.title}, ${person.firstName}, ${person.lastName}`
          return <div className='Block' value={person} key={key}>
            <div>
              <img src={person.picture} alt="" />
            </div>
            <div className='details'>
              <p>{person.id}</p>
              <p className='profile'>{people}</p>
            </div>
          </div>
        }
        )
      }
        <div />

      </div>

    </div>
  )
}


export default Input;
