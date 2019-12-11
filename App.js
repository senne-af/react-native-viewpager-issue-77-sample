import React, { useRef, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import ViewPager from '@react-native-community/viewpager'

const App = () => {

  const viewRef = useRef()

  useEffect(() => {
    console.log(viewRef)
  }, [viewRef])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }}>
        <View ref={viewRef}>
          <Text>Screen 1</Text>
        </View>
        <View><Text>Screen 2</Text></View>
        <View><Text>Screen 3</Text></View>
      </ViewPager>
    </SafeAreaView>
  )
}

export default App