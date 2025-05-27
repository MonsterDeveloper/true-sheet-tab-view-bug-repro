import { TrueSheet } from "@lodev09/react-native-true-sheet"
import { useRef, useState } from "react"
import { Button, Text, View, useWindowDimensions } from "react-native"
import { SceneMap, TabView } from "react-native-tab-view"

function Route() {
  return (
    <View>
      <Text>123</Text>
      <Sheet />
    </View>
  )
}

const renderScene = SceneMap({
  first: Route,
  second: Route,
})

const routes = [
  { key: "first", title: "First" },
  { key: "second", title: "Second" },
]

export default function TabViewExample() {
  const layout = useWindowDimensions()
  const [index, setIndex] = useState(0)

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
}

const Sheet = () => {
  const sheet = useRef<TrueSheet>(null)

  // Present the sheet ✅
  const present = async () => {
    await sheet.current?.present()
    console.log("horray! sheet has been presented 💩")
  }

  // Dismiss the sheet ✅
  const dismiss = async () => {
    await sheet.current?.dismiss()
    console.log("Bye bye 👋")
  }

  return (
    <View>
      <Button onPress={present} title="Present" />
      <TrueSheet ref={sheet} sizes={["auto", "large"]} cornerRadius={24}>
        <Button onPress={dismiss} title="Dismiss" />
      </TrueSheet>
    </View>
  )
}
