import React, {useState} from 'react'
import {StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native'

import {
    Container,
    Form,
    Item,
    Input,
    Text,
    Button,
    H3
} from 'native-base'

import Welcome from '../assets/undraw_sign_in_e6hj.png'


import {connect} from 'react-redux'
import {signIn} from '../action/auth'
import propTypes from 'prop-types'

const SignIn = ({navigation, signIn}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const doSignIn = () => {
        signIn({email, password})
    }


    return (
        <Container style={styles.container}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <H3 style = {styles.heading}>Sign In</H3>
            <Image
              source={Welcome}
              style={{width: null, height: 150, marginTop: 30}}
              resizeMode="contain"
            />
    
            <Form>
              <Item rounded style={styles.formItem}>
                <Input
                  placeholder="enter your email id"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </Item>
              <Item rounded style={styles.formItem}>
                <Input
                  placeholder="enter your password"
                  value={password}
                  secureTextEntry={true}
  
                  onChangeText={(text) => setPassword(text)}
                />
              </Item>
              <Button style ={{color:'#70af85'}} rounded block onPress={doSignIn}>
                <Text>SignIn</Text>
              </Button>
              <Text style={{textAlign: 'center'}}> Do not have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                style={{marginTop: 10}}>
                <Text style={{color: '#70af85', textAlign: 'center'}}>
                 SignUp here
                </Text>
              </TouchableOpacity>
            </Form>
          </ScrollView>
        </Container>
      );
}

const mapDispatchToProps = {
    signIn: (data) => signIn(data)
}

SignIn.propTypes = {
    signIn: propTypes.func.isRequired
}


export default connect(null, mapDispatchToProps)(SignIn)

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      justifyContent: 'flex-start',
    },
    heading: {
      textAlign: 'center',
      color: '#1b262c',
      marginHorizontal: 5,
      marginTop: 30,
    },
    formItem: {
      marginBottom: 20,
    },
  });
  