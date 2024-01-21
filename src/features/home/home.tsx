import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import {Navbar} from '../../components';
import {getTagsList, getPromotions} from '../../services/tags';
import RenderHtml from 'react-native-render-html';
import {useNavigation} from '@react-navigation/native';
import {ITagsResponse, IPromotionsListResponse} from '../../lib/DTOs';

const Home: React.FC = () => {
  const [tagList, setTagList] = useState<ITagsResponse>();
  const [promotions, setPromotions] = useState<IPromotionsListResponse>();
  const navigation = useNavigation();

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const tags = await getTagsList();
    setTagList(tags);
    const res = await getPromotions();
    setPromotions(res);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tagList &&
          tagList.map(item => {
            return (
              <TouchableOpacity style={styles.tag}>
                <Image
                  style={{width: 25, height: 25}}
                  source={{
                    uri: item.IconUrl,
                  }}
                />
                <Text style={styles.title}>{item?.Name}</Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {promotions &&
          promotions.map(item => {
            return (
              <TouchableOpacity
                style={styles.promotion}
                onPress={() => {
                  navigation.navigate('Detail', {id: item?.Id});
                }}>
                <Image
                  style={styles.img}
                  source={{
                    uri: item.ImageUrl,
                  }}
                />
                <View style={styles.brandBg}>
                  <Image
                    style={{width: 60, height: 60}}
                    source={{
                      uri: item.BrandIconUrl,
                    }}
                  />
                </View>
                <RenderHtml
                  contentWidth={300}
                  source={{html: `${item?.Title}`}}
                  baseStyle={styles.content}
                />
                <Text style={[styles.brand, {color: item?.brandIconColor}]}>
                  Daha Daha
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#edeef0',
  },
  tag: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 8,
    margin: 8,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: 5,
  },
  promotion: {
    justifyContent: 'center',
    marginHorizontal: 14,
    marginTop: 14,
    backgroundColor: 'white',
    padding: 4,
    paddingBottom: 16,
    borderRadius: 16,
  },
  brandBg: {
    position: 'absolute',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 100,
    top: 240,
    left: -10,
  },
  content: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  brand: {
    fontSize: 17,
    textAlign: 'center',
  },
  img: {
    width: 310,
    height: 310,
    borderRadius: 16,
    borderBottomLeftRadius: 140,
  },
});

export {Home};
