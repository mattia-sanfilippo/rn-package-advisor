import { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

type ScreenWrapperProps = PropsWithChildren<object>;

export default function ScreenWrapper({ children }: ScreenWrapperProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
