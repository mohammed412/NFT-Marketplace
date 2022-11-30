import React from 'react'
import { Button, Text, View } from 'react-native'

const About = ({navigation}) => {
    return (
        <View>
            
            <Button title='Go Demo'
            onPress={()=>navigation.navigate('Demo')}
            />

            <Button title='Back Home'
            onPress={()=>navigation.navigate('Home')}
            />
        </View>
    )
}

export default About