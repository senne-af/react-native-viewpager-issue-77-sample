import React, { useRef, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import ViewPager from '@react-native-community/viewpager'

const App = () => {

  const viewRefOne = useRef()
  const viewRefTwo = useRef()

  useEffect(() => {
    // will be undefined
    console.log('one', viewRefOne)

    //works
    console.log('two', viewRefTwo)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }}>
        <View ref={viewRefOne}>
          <Text>Screen 1</Text>
        </View>
        <View>
          <View ref={viewRefTwo}>
            <Text>Screen 2</Text>
          </View>
        </View>
      </ViewPager>
    </SafeAreaView>
  )
}

export default App