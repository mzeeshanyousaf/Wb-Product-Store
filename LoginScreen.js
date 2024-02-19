import React, { useState } from 'react';
import { View, Text , TextInput, Button } from 'react-native';
import { useMutation, gql } from '@apollo/client';

const LOGIN_USER = gql`
mutation MyMutation($input: LoginInput!) {
  login(input: $input) {
    authToken
    user {
      id
      name
    }
  }
}
`;



 const  LoginScreen = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useMutation(LOGIN_USER);


  const handleLogin = async () => {
    try {
      const { data } = await login({
        variables: {
          input: {
            username,
            password
          }
        }
      });
      console.log('User Token:', data.login.authToken);
      console.log('User Name:', data.login.user.name);

      // Handle success, e.g., navigate to another screen
    } catch (error) {
      console.error('Error login user:', error);
      // console.error('Error reg user:', data.registerUser.user);
      // Handle error, e.g., show an error message
    }
  };
  







    return (
      <View >
        <Text>Login Here</Text>
        <TextInput
        placeholder="Username Or Email"
        value={username}
        onChangeText={setUsername}
      />
       <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      </View>
    );
  }

  export default LoginScreen;