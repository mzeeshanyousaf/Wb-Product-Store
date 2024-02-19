import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useMutation, gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation MyMutation($input: RegisterUserInput!) {
    registerUser(input: $input) {
      user {
        jwtAuthToken
        jwtRefreshToken
      }
    }
  }
`;

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [registerUser] = useMutation(CREATE_USER);

  const handleSignUp = async () => {
    try {
      const { data } = await registerUser({
        variables: {
          input: {
            username,
            email,
            password
          }
        }
      });
      console.log('User created:', data.registerUser.user.jwtAuthToken);
      // Handle success, e.g., navigate to another screen
    } catch (error) {
      console.error('Error reg user:', error);
      // console.error('Error reg user:', data.registerUser.user);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
