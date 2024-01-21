import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {getPromotionsDetail} from '../../services/tags';
import RenderHtml from 'react-native-render-html';
import {SvgArrowLeft} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {IPromotionsDetail} from '../../lib/DTOs';
import {RootStackParamList} from '../../navigation/types';

const Detail: React.FC<
  StackScreenProps<RootStackParamList, 'Detail'>
> = props => {
  const [data, setData] = useState<IPromotionsDetail>();
  const navigation = useNavigation();
  const {route} = props;
  const {id} = route.params;

  useEffect(() => {
    getApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getApi = async () => {
    const res = await getPromotionsDetail(id);
    setData(res);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.left}
        onPress={() => {
          navigation.goBack();
        }}>
        <SvgArrowLeft />
      </TouchableOpacity>

      <ScrollView>
        <Image style={styles.img} source={{uri: data?.ImageUrl}} />
        <View style={styles.brandBg}>
          <Image
            style={styles.size}
            source={{
              uri: data?.BrandIconUrl,
            }}
          />
        </View>
        <RenderHtml
          contentWidth={300}
          source={{html: `${data?.Title}`}}
          baseStyle={styles.title}
        />
        <RenderHtml
          contentWidth={300}
          source={{html: `${data?.Description}`}}
          baseStyle={styles.content}
        />
      </ScrollView>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Hemen Katıl</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  brandBg: {
    position: 'absolute',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 100,
    top: 340,
    left: 0,
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 14,
    padding: 8,
  },
  btn: {
    backgroundColor: 'red',
    padding: 16,
    margin: 16,
    borderRadius: 30,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  left: {
    position: 'absolute',
    top: 30,
    left: 10,
    zIndex: 100,
    backgroundColor: 'gray',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  img: {width: 400, height: 400, borderBottomLeftRadius: 160},
  size: {width: 60, height: 60},
});

export {Detail};
