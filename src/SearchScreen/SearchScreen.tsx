import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import SearchBar from './SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
  const [term, setTerm] = useState<string>('')
  const [results, setResults] = useState<string[]>([])
  const [errorMessage, setErrorMessage] = useState<string>('')

  const searchYelpApi = async (searchTerm: string) => {
    try {
      const response = await yelp.get('/search', { params: { term: searchTerm, location: 'london', limit: 50 } })
      setResults(response.data.businesses)
    } catch (error) {
      setErrorMessage(`Uh oh! Something went wrong and we couldn't get your results!`)
    }
  }

  useEffect(() => {
    searchYelpApi('pizza')
  }, [])

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchYelpApi(term)} />
      <Text>Search term: {term}</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : <Text>We have found {results.length} results</Text>}
    </View>
  )
}

export default SearchScreen
