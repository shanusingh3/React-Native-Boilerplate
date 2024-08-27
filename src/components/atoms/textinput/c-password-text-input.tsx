/* eslint-disable no-undef */
import * as React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { PasswordEye } from '@assets/svg';
import scaler from '@utils/scaler';
import Text from '../text/c-text-component';
import { theme } from '@theme/theme';

interface InputTextProps extends ViewStyle {
  placeholder?: string;
  inputStyle?: StyleProp<TextStyle>;
  value?: string;
  onChangeText?: (rawValue: string) => void;
  handleChange?: any;
  handleBlur?: any;
  title?: string;
  heightVal?: number;
  containerStyle?: StyleProp<ViewStyle>;
  clearTextField?: () => void;
  secureTextEntry?: boolean;
  isLoading?: boolean;
}

const PasswordInputText = (props: InputTextProps) => {
  const {
    placeholder = '',
    inputStyle,
    value: _providedValue = '',
    title,
    containerStyle,
    heightVal = scaler(50),
    handleChange,
    handleBlur,
    isLoading = false,
  } = props;
  const [toggleSecuretext, setToggleSecuretext] = React.useState<boolean>(true);

  return (
    <View style={[containerStyle]}>
      {title && (
        <Text variant='label' lineHeight={0}>
          {title}
        </Text>
      )}
      <View
        style={[styles.inputContainer, { height: heightVal }, styles.textBox]}
      >
        <TextInput
          style={[styles.inputStyles, inputStyle]}
          placeholderTextColor={theme.colors.placeholderTextColor}
          placeholder={placeholder}
          onChangeText={handleChange}
          onBlur={handleBlur}
          value={_providedValue}
          autoCorrect={false}
          blurOnSubmit={true}
          secureTextEntry={toggleSecuretext}
          editable={!isLoading}
        />

        <View style={styles.closeButtonStyle}>
          <TouchableOpacity
            onPress={() => setToggleSecuretext(!toggleSecuretext)}
          >
            {!isLoading && <PasswordEye isSelected={toggleSecuretext} />}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: theme.colors.inputBorderColor,
    borderWidth: scaler(1),
    borderRadius: scaler(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: scaler(2),
    textAlignVertical: 'top',
  },
  inputStyles: {
    fontFamily: theme.fontFamily.OpenSansRegular,
    color: theme.colors.darkCharcoal,
    fontWeight: '400',
    paddingHorizontal: scaler(12),
    width: '90%',
    fontSize: scaler(16),
  },
  closeButtonStyle: {
    justifyContent: 'center',
    paddingRight: scaler(12),
    width: '10%',
  },
  textBox: {
    paddingVertical: scaler(5),
  },
});
export default React.memo(PasswordInputText);
