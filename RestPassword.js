import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { useMutation, gql } from '@apollo/client';


const PasswordResetEmail = gql`
mutation MyMutation($input: SendPasswordResetEmailInput!) {
    sendPasswordResetEmail(input: $input){
      success
    }
  }
`;

const RestPassword = () => {
  const [username, setUsername] = useState('');
  

  const [sendPasswordResetEmail] = useMutation(PasswordResetEmail);

  const handleRest = async () => {
    try {
      const { data } = await sendPasswordResetEmail({
        variables: {
          input: {
            username
          }
        }
      });
      alert('Password Rest:', data.sendPasswordResetEmail.success);
      // Handle success, e.g., navigate to another screen
    } catch (error) {
      console.error('Error Rest Password:', error);
      // console.error('Error reg user:', data.registerUser.user);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <View>
         <Text>Reset password Screen</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
     
      <Button title="Rest Password" onPress={handleRest} />
    </View>
  );
};

export default RestPassword;
;
