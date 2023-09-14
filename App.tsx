import {useState} from 'react';
import {StatusBar, StyleSheet, Text, View, Image} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Iconicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const App = () => {
  const [isLIked, setisLIked] = useState(true);
  return (
    <View style={styles.post}>
      {/* header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>Muhammad Usman</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          color={colors.white}
          style={styles.threeDots}
        />
      </View>

      {/* content */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />
      {/* footer */}
      <View style={styles.iconContainer}>
        <AntDesign
          name={isLIked ? 'heart' : 'hearto'}
          size={24}
          style={styles.icon}
        />
        <Iconicons name="chatbubble-outline" size={24} style={styles.icon} />
        <Feather name="send" size={24} style={styles.icon} />
        <Feather name="bookmark" size={24} style={{marginLeft: 'auto'}} />
      </View>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  // header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
  },
  threeDots: {
    marginLeft: 'auto',
  },

  // content
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },

  // footer
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
});
