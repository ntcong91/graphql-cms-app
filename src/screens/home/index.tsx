import { useQuery } from '@apollo/client';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { FlatList, ImageBackground, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Card from '../../components/Card';
import { H3 } from '../../components/Typography';
import Constants from '../../constants';
import { Product } from '../../generated/graphql';
import { GET_PRODUCTS } from '../../graphql/graphqlConstant';
import AppColors from '../../themes/AppColors';
import Images from '../../themes/Images';

interface IHome {}

const Home = ({}: IHome) => {
  const { loading, data, fetchMore } = useQuery(GET_PRODUCTS, {
    variables: {
      offset: 0,
      limit: Constants.DEFAULT_PAGINATION_LIMIT,
    },
  });

  useFocusEffect(() => {
    fetchMore({
      variables: {
        offset: 0,
      },
    });
  });

  const _productKeyExtractor = (item: Product, index: number) =>
    `${item?.productID || ''}_${index}`;

  const renderProductItem = ({ item }: { item: Product }) => {
    return <Card {...item} />;
  };

  const renderProductList = () => {
    return (
      <FlatList
        style={styles.flatList}
        horizontal
        data={data?.products || []}
        keyExtractor={_productKeyExtractor}
        renderItem={renderProductItem}
      />
    );
  };

  const renderGreetings = () => {
    const today = new Date();
    const curHr = today.getHours();
    let strGreetings: string = '';
    if (curHr < 12) {
      strGreetings = 'Good morning!';
    } else if (curHr < 18) {
      strGreetings = 'Good afternoon!';
    } else {
      strGreetings = 'Good evening!';
    }

    const generatedId = 'd50aeb3c-7342-4675-b836-b4f9867eebb4';
    return (
      <View style={styles.greetingContainer}>
        <Text>{strGreetings}</Text>
        <H3 bold>{generatedId}</H3>
      </View>
    );
  };

  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
      source={Images.imgGradientBackground}>
      {renderGreetings()}
      <H3 bold style={styles.lblRecommend}>
        Recommended for you
      </H3>
      {loading && <ActivityIndicator color={AppColors.primary} />}
      {renderProductList()}
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greetingContainer: {
    marginHorizontal: 16,
  },
  flatList: {
    marginLeft: 16,
    flexGrow: 0,
  },
  lblRecommend: {
    marginTop: 8,
    marginBottom: 16,
    marginHorizontal: 16,
  },
});
