import React from 'react'
import styles from './Search.module.scss'

const Search = ({searchValue, setSearchValue}) => {
  return (
    <input className={styles.root} placeholder='Поиск...' value={searchValue} onChange={e=> setSearchValue(e.target.value)}/>
  )
}

export default Search;