import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'

let Stack = createStackNavigator()

const Demo = ({navigation}) => {
    return (
        <View >
          
            <Button title='Go About'
            onPress={()=>navigation.navigate('About')}
            />
                <Stack.Navigator>
                    <Stack.Screen
                        name='introDemo'
                        component={() => {
                            return (
                                <View>
                                    <Text>Hello intro</Text>
                                </View>

                            )
                        }}
                    />
                    <Stack.Screen
                        name='aboutDemo'
                        component={() => {
                            return (
                                <View>
                                    <Text>Hello about</Text>
                                </View>

                            )
                        }}
                    />
                </Stack.Navigator>
        </View>
    )
}

export default Demo