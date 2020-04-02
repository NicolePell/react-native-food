import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

type Props = {
  term: string
  onTermChange: (newTerm: string) => void
  onTermSubmit: () => void
}

const SearchBar = (props: Props) => {
  const { term, onTermChange, onTermSubmit } = props
  return (
    <View style={styles.view}>
      <Feather style={styles.icon} name="search" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row',
  },
  icon: {
    fontSize: 36,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
})

export default SearchBar
