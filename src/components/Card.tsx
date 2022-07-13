import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Product } from '../generated/graphql';
import AppColors from '../themes/AppColors';
import Images from '../themes/Images';
import { H3 } from './Typography';

interface ICard extends Product {}

const Card = ({
  apiFeaturedImage = undefined,
  brand = '',
  name = '',
  tagList = [],
}: ICard) => {
  const [isFavorite, setFavorite] = useState<boolean>(false);

  const uri = apiFeaturedImage?.includes('http')
    ? apiFeaturedImage
    : `https:${apiFeaturedImage}`;

  const renderFavoriteButton = () => {
    const handlePressFavorites = () => {
      setFavorite(!isFavorite);
    };
    return (
      <TouchableOpacity
        style={[styles.btnFavorite, styles.shadow]}
        onPress={handlePressFavorites}>
        <Image
          style={styles.icFavorite}
          source={
            isFavorite ? Images.icTabFavoritesActive : Images.icTabFavorites
          }
        />
      </TouchableOpacity>
    );
  };

  const renderBrand = () => {
    return (
      <View style={[styles.brandContainer]}>
        <Text style={styles.txtBrand}>{brand}</Text>
      </View>
    );
  };

  const renderName = () => {
    return (
      <H3 bold style={styles.txtName}>
        {name || ''}
      </H3>
    );
  };

  const renderTagList = () => {
    const strTagList: string = tagList.join(' - ');
    return (
      <View style={styles.tagListContainer}>
        <Image source={Images.icInformation} />
        <Text>{strTagList}</Text>
      </View>
    );
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri }} style={styles.thumbnail} />
      {renderBrand()}
      {renderFavoriteButton()}
      {renderName()}
      {renderTagList()}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
    backgroundColor: AppColors.whiteTwo,
  },
  thumbnail: {
    width: 240,
    height: 240,
    backgroundColor: AppColors.primary,
    marginTop: 16,
  },
  brandContainer: {
    backgroundColor: AppColors.lightGrey,
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 6,
    position: 'absolute',
    left: 16,
    top: 39.5,
  },
  txtBrand: {
    color: AppColors.txtDark,
    lineHeight: 20,
  },
  shadow: {
    shadowColor: 'rgba(0,0,0, 0.4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnFavorite: {
    position: 'absolute',
    top: 39.5,
    right: 16,
    width: 34,
    height: 34,
    borderRadius: 17,
  },
  icFavorite: {
    width: 18,
    height: 18,
  },
  txtName: {
    marginHorizontal: 6,
    marginVertical: 8,
  },
  tagListContainer: {
    flexDirection: 'row',
  },
});
