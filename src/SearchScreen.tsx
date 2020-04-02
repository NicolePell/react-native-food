import React, { useState } from 'react'
import { Text, View } from 'react-native'

import SearchBar from './SearchScreen/SearchBar'

const SearchScreen = () => {
  const [term, setTerm] = useState('')

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('Term was submitted')}
      />
      <Text>Search term: {term}</Text>
    </View>
  )
}

export default SearchScreen
