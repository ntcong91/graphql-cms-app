import { Colors, configureFonts, DefaultTheme } from 'react-native-paper';
import AppColors from '../themes/AppColors';
import fontConfig from '../themes/FontConfig';

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      card: string;
      flatListItem: string;
      tabBarActiveTintColor: string;
      tabBarInactiveTintColor: string;
    }
    interface Theme {
      colors: ThemeColors;
    }
  }
}

const CustomLightTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  dark: false,
  fonts: configureFonts({
    ios: fontConfig,
    android: fontConfig,
  }),
  colors: {
    ...DefaultTheme.colors,
    background: AppColors.background,
    text: Colors.black,
    accent: Colors.red700,
    primary: AppColors.primary,
    tabBarActiveTintColor: AppColors.primary,
    tabBarInactiveTintColor: Colors.grey400,
    flatListItem: Colors.white,
    card: AppColors.background,
  },
};

export { CustomLightTheme };

export const headerNoBorderStyle = {
  backgroundColor: Colors.white,
  borderBottomWidth: 0,
  shadowColor: 'transparent',
};

export const headerTitleStyle = {
  ...fontConfig.medium,
  fontSize: 14,
  color: CustomLightTheme.colors.primary,
};

export const headerBackWithIconConfig = {
  headerBackTitleStyle: {
    ...fontConfig.medium,
    fontSize: 16,
    color: CustomLightTheme.colors.primary,
  },
  headerBackTitle: '',
  headerTruncatedBackTitle: '',
};

export const headerBackWithTitleConfig = {
  headerBackTitleStyle: {
    ...fontConfig.medium,
    fontSize: 18,
    color: CustomLightTheme.colors.primary,
  },
  headerBackTitle: 'back',
  headerTruncatedBackTitle: 'back',
};
