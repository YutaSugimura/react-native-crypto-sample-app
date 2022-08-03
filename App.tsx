/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Crypto from 'react-native-quick-crypto';
import {ethers} from 'ethers';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [address, setAddress] = useState<string>();

  const onCreate = useCallback(() => {
    const start = (global as any).performance.now();

    const wallet = ethers.Wallet.createRandom();
    setAddress(wallet.address);

    const end = (global as any).performance.now();
    console.log(`Creating a Wallet took ${end - start} ms.`);
  }, []);

  const onGenerateHash = useCallback(() => {
    const hashed = Crypto.createHash('sha256')
      .update('Hello world')
      .digest('hex');
    console.log(hashed);
  }, []);

  const onReset = useCallback(() => {
    setAddress(undefined);
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      />
      <Text>address: {address}</Text>

      <Button title="Create Wallet" onPress={onCreate} />
      <Button title="Reset" onPress={onReset} />
      <Button title="Generate Hash" onPress={onGenerateHash} />
    </SafeAreaView>
  );
};

export default App;
