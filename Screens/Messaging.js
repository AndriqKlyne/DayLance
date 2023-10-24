import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function MessagingScreen() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (message) {
      setChat([...chat, message]);
      setMessage('');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        {chat.map((msg, index) => (
          <Text key={index}>{msg}</Text>
        ))}
      </View>
      <TextInput
        placeholder="Type your message"
        value={message}
        onChangeText={text => setMessage(text)}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}

export default MessagingScreen;
