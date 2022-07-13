import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React from 'react';
import {
  Animated,
  Image,
  Platform,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import Images from '../../themes/Images';
import FavoritesTab from './FavoritesTab';
import HomeTab from './HomeTab';
import ShopTab from './ShopTab';

const BottomTab = createBottomTabNavigator();

const TAB_BAR_VISIBLE_ALLOWED_LIST: string[] = [];
const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? 100 : 74;

const getTabBarVisible = (
  route: any,
): Animated.WithAnimatedValue<StyleProp<ViewStyle>> => {
  const routeName: string = getFocusedRouteNameFromRoute(route) ?? '';

  if (routeName?.length && TAB_BAR_VISIBLE_ALLOWED_LIST.includes(routeName)) {
    return {
      display: 'none',
      height: TAB_BAR_HEIGHT,
      paddingVertical: 6,
    };
  }

  return {
    height: TAB_BAR_HEIGHT,
    paddingVertical: 6,
  };
};

function BottomTabs({}) {
  const { colors } = useTheme();
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.tabBarActiveTintColor,
        tabBarInactiveTintColor: colors.tabBarInactiveTintColor,
      }}>
      <BottomTab.Screen
        key="HOME_TAB"
        name="HOME_TAB"
        component={HomeTab}
        options={({ route }) => ({
          tabBarLabel: 'Home',
          tabBarLabelStyle: styles.lblTab,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Images.icTabHomeActive : Images.icTabHome}
            />
          ),
          tabBarIconStyle: styles.icTab,
          tabBarStyle: {
            ...StyleSheet.flatten(getTabBarVisible(route)),
            ...styles.tab,
          },
        })}
      />
      <BottomTab.Screen
        key="SHOP_TAB"
        name="SHOP_TAB"
        component={ShopTab}
        options={({ route }) => ({
          tabBarLabel: 'Shop',
          tabBarLabelStyle: styles.lblTab,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Images.icTabShopActive : Images.icTabShop}
            />
          ),
          tabBarIconStyle: styles.icTab,
          tabBarStyle: {
            ...StyleSheet.flatten(getTabBarVisible(route)),
            ...styles.tab,
          },
        })}
      />
      <BottomTab.Screen
        key="FAVORITES_TAB"
        name="FAVORITES_TAB"
        component={FavoritesTab}
        options={({ route }) => ({
          tabBarLabel: 'Favorites',
          tabBarLabelStyle: styles.lblTab,
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused ? Images.icTabFavoritesActive : Images.icTabFavorites
              }
            />
          ),
          tabBarIconStyle: styles.icTab,
          tabBarStyle: {
            ...StyleSheet.flatten(getTabBarVisible(route)),
            ...styles.tab,
          },
        })}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabs;

const styles = StyleSheet.create({
  tab: {
    paddingTop: 16,
  },
  lblTab: {
    marginTop: 16,
    marginBottom: 8,
  },
  icTab: {},
});
