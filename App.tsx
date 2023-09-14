import {StatusBar, StyleSheet, Text, View} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';

import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: colors.primary,
          fontSize: fonts.size.lg,
        }}>
        Hello world
        <AntDesign name="stepforward" size={30} color={colors.white} />
      </Text>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
