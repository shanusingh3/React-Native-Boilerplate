import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import { scaler } from '@utils';
import SplashScreen from 'react-native-splash-screen';
import {
  Button,
  ErrorLabel,
  InputText,
  PasswordInputText,
  Text,
} from '@components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { theme } from '@theme/theme';
import { AuthThunk, dispatch } from '@app/redux';

const { height } = Dimensions.get('screen');
const isSmallDevice = height <= 700 ? true : false;

const Login = () => {
  const { t } = useTranslation();
  const formikRef = useRef();

  const [isInvalidUser, setIsInvalidUser] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    if (SplashScreen) {
      SplashScreen.hide();
    }
  }, []);

  const loginPressed = useCallback(async (body: any) => {
    setIsLoading(true);
    const response = await dispatch(AuthThunk.login(body));
    const { status, data } = response.payload;
    try {
      if (status === 200) {
        setIsLoading(false);
      } else {
        const { message } = data;
        setErrorMessage(message);
        setIsLoading(false);
        setIsInvalidUser(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }, []);

  const resetError = () => {
    setIsInvalidUser(false);
    setErrorMessage('');
  };

  return (
    <SafeAreaView style={styles.scrollView}>
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <KeyboardAwareScrollView
          keyboardDismissMode='on-drag'
          keyboardShouldPersistTaps='always'
          contentContainerStyle={styles.scrollStyle}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.logoContainer}>
            {/* <Gems /> */}
            <Text
              fontSize={scaler(36)}
              lineHeight={scaler(80)}
              color='deepPurple'
            >
              Unlockr
            </Text>
          </View>
          <Formik
            enableReinitialize
            initialValues={{
              Username: '',
              Password: '',
            }}
            innerRef={formikRef}
            onSubmit={(values) => loginPressed(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              setFieldValue,
              errors,
              touched,
            }) => (
              <View style={styles.textInputContainer}>
                <InputText
                  placeholder={t('login:placeholder:username')}
                  containerStyle={styles.textInputBetweenStyles}
                  handleChange={(value: any) => {
                    handleChange('Username')(value);
                    resetError();
                  }}
                  handleBlur={handleBlur('Username')}
                  type={!isLoading ? 'close' : undefined}
                  value={values.Username}
                  clearTextField={() => setFieldValue('Username', '')}
                  editable={!isLoading}
                />
                {touched.Username && errors.Username && (
                  <ErrorLabel error={errors.Username} />
                )}
                <PasswordInputText
                  placeholder={t('login:placeholder:password')}
                  containerStyle={styles.textInputBetweenStyles}
                  handleChange={(value: any) => {
                    handleChange('Password')(value);
                    resetError();
                  }}
                  handleBlur={handleBlur('Password')}
                  value={values.Password}
                  isLoading={isLoading}
                />
                {touched.Password && errors.Password && (
                  <ErrorLabel error={errors.Password} />
                )}
                {isInvalidUser && <ErrorLabel error={errorMessage} />}
                <Button
                  title={t('login:loginCTA')}
                  onPress={handleSubmit}
                  isLoading={isLoading}
                  style={styles.btnStyle}
                />
              </View>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: height,
    backgroundColor: theme.colors.backgroundColor,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
  logoContainer: {
    alignItems: 'center',
    flexDirection: 'column-reverse',
    flex: 1,
    marginTop: isSmallDevice ? scaler(30) : scaler(120),
  },
  textInputContainer: {
    flex: 3,
    paddingHorizontal: scaler(20),
    paddingTop: isSmallDevice ? scaler(30) : scaler(60),
  },
  textInputBetweenStyles: {
    marginTop: scaler(10),
  },
  btnStyle: {
    marginTop: scaler(45),
  },
});

export default Login;
