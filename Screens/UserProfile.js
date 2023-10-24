import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function UserProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>User Profile</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Bio"
        value={bio}
        onChangeText={text => setBio(text)}
        multiline
      />
      <Button title="Save" onPress={() => alert('Profile saved')} />
    </View>
  );
}

export default UserProfileScreen;
