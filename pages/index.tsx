import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FormEvent, useCallback, useState } from 'react'
import { SearchResult } from '../components/SearchResults'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)

    const data = await response.json();

    setResults(data)
  }

  const addToWidhList = useCallback(async (id: number) => {

  }, [])

  return (
    <div className={styles.container}>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type='submit'>
          Buscar
        </button>

        <SearchResult
          result={results}
          onAddToWishList={addToWidhList}
        />
      </form>
    </div>
  )
}

export default Home
