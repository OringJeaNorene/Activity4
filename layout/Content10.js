import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';

export default function Content10() {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>This is an example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Click Me
      </Button>
    </PaperProvider>
    
  );
}
