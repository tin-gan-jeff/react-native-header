import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Header,
  LargeHeader,
  ScalingView,
  ScrollHeaderProps,
  ScrollLargeHeaderProps,
  ScrollViewWithHeaders,
} from '@codeherence/react-native-header';
import type { HomeScreenNavigationProps, RootStackParamList } from '../navigation';

interface ScreenConfigItem {
  name: string;
  route: keyof RootStackParamList;
  description: string;
}

const SCREEN_LIST_CONFIG: ScreenConfigItem[] = [
  {
    name: 'ScrollView Example',
    route: 'SimpleUsageScreen',
    description: 'A simple example of the library using the ScrollView.',
  },
  {
    name: 'FlatList Example',
    route: 'FlatListUsageScreen',
    description: "A simple example of the library's FlatList.",
  },
  {
    name: 'FlashList Example',
    route: 'FlashListUsageScreen',
    description: "A simple example with Shopify's FlashList.",
  },
  {
    name: 'SectionList Example',
    route: 'SectionListUsageScreen',
    description: "A simple example of the library's SectionList.",
  },
  {
    name: 'Inverted Example',
    route: 'InvertedUsageScreen',
    description: "A simple example of the library's Inverted FlatList.",
  },
  {
    name: 'Header SurfaceComponent Interpolation',
    route: 'HeaderSurfaceComponentUsageScreen',
    description:
      'A simple example of the library using the SurfaceComponent prop for its header to animate the background color of the header.',
  },
  {
    name: 'Twitter Profile',
    route: 'TwitterProfileScreen',
    description: 'Rebuilding the Twitter profile header with this library.',
  },
  {
    name: 'Absolute Header with Blurred Surface',
    route: 'AbsoluteHeaderBlurSurfaceUsageScreen',
    description: 'An example of an absolutely-positioned header with a BlurView surface.',
  },
  {
    name: 'Arbitrary Y Transition Header',
    route: 'ArbitraryYTransitionHeaderUsageScreen',
    description:
      'An example of a header that transitions based on the scroll position of the ScrollView, instead of passing the height of the large header before animating.',
  },
  {
    name: 'Custom onScroll Worklet Example',
    route: 'CustomOnScrollWorkletUsageScreen',
    description:
      "A simple example with a custom worklet that tracks the scroll container's offset.",
  },
];

const HeaderComponent: React.FC<ScrollHeaderProps> = ({ showNavBar }) => {
  return (
    <Header
      showNavBar={showNavBar}
      headerCenter={<Text style={styles.navBarTitle}>react-native-header</Text>}
    />
  );
};

const LargeHeaderComponent: React.FC<ScrollLargeHeaderProps> = ({ scrollY }) => {
  return (
    <LargeHeader>
      <ScalingView scrollY={scrollY} style={styles.leftHeader}>
        <Text style={styles.regular} numberOfLines={1}>
          Welcome!
        </Text>
        <Text style={styles.title} numberOfLines={1}>
          react-native-header
        </Text>
        <Text style={styles.subtext}>
          This project displays some header examples using the package.
        </Text>
      </ScalingView>
    </LargeHeader>
  );
};

const Home: React.FC<HomeScreenNavigationProps> = ({ navigation }) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <ScrollViewWithHeaders
      disableAutoFixScroll
      HeaderComponent={HeaderComponent}
      LargeHeaderComponent={LargeHeaderComponent}
      contentContainerStyle={{ paddingBottom: bottom }}
    >
      <View style={styles.usagesList}>
        {SCREEN_LIST_CONFIG.map(({ name, route, description }) => (
          <TouchableOpacity
            key={name}
            onPress={() => navigation.navigate(route)}
            style={styles.button}
          >
            <Text style={styles.subtitle}>{name}</Text>
            <Text style={styles.subtext}>{description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollViewWithHeaders>
  );
};

export default Home;

const styles = StyleSheet.create({
  usagesList: { marginTop: 16, paddingHorizontal: 16, gap: 12 },
  navBarTitle: { fontSize: 16, fontWeight: 'bold' },
  regular: { fontSize: 14 },
  title: { fontSize: 32, fontWeight: 'bold' },
  subtitle: { fontSize: 24, fontWeight: 'bold' },
  subtext: { fontSize: 12, fontWeight: 'normal', color: '#8E8E93' },
  leftHeader: { gap: 2 },
  button: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    gap: 4,
  },
});
