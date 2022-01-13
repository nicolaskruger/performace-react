import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FormEvent, useCallback, useState } from 'react'
import { SearchResult } from '../components/SearchResults'
import styles from '../styles/Home.module.css'

type Result = {
  id: number,
  price: number,
  title: string,
  priceFormatted: string,
}

type ResultQuery = {
  data: Result[],
  totalPrice: number,
}

const Home: NextPage = () => {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState<ResultQuery>({ data: [], totalPrice: 0 });

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (!search.trim()) {
      return;
    }

    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const response = await fetch(`http://localhost:3333/products?q=${search}`)

    const data = (await response.json()) as Result[];

    const products = data.map(product => ({
      ...product,
      priceFormatted: formatter.format(product.price)
    }))

    const totalPrice = data.reduce((total, product) => {
      return total + product.price;
    }, 0)

    setResults({ totalPrice, data: products })
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
          result={results.data}
          totalPrice={results.totalPrice}
          onAddToWishList={addToWidhList}
        />
      </form>
    </div>
  )
}

export default Home
