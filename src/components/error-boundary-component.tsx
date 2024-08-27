import { theme } from '@theme/theme';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import RNRestart from 'react-native-restart';

export class ErrorBoundary extends React.Component<any, any> {
  state = {
    error: false,
  };

  static getDerivedStateFromError(error: any) {
    console.warn(error);
    return { error: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // deal with errorInfo if needed
    console.warn(error);
    console.warn(errorInfo);
  }

  handleBackToSignIn = async () => {
    RNRestart.restart();
  };

  render() {
    if (this.state.error) {
      return (
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.fontStyle}>Oops, Something Went Wrong</Text>
            <Text style={styles.contentStyle}>
              The app ran into a problem and could not continue. We apologise
              for any inconvenience this has caused! Press the button below to
              restart the app. Please contact us if this issue persists.
            </Text>
            <Button
              title={'Back to Sign In Screen'}
              onPress={() => this.handleBackToSignIn()}
            />
          </View>
        </View>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
  contentStyle: {
    marginVertical: 10,
    lineHeight: 23,
    fontWeight: '500',
  },
  fontStyle: {
    fontSize: 32,
  },
});
