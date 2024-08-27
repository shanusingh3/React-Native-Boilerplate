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
import { RoundClose, SearchBar } from '@assets/svg';
import scaler from '@utils/scaler';
import Text from '../text/c-text-component';
import { theme } from '@theme/theme';

enum InputTextType {
  normal = 'NORMAL',
  close = 'CLOSE',
  search = 'SEARCH',
}

interface InputTextProps extends ViewStyle {
  placeholder?: string;
  inputStyle?: StyleProp<TextStyle>;
  value?: string;
  onChangeText?: (rawValue: string) => void;
  handleChange?: any;
  handleBlur?: any;
  handleFocus?: any;
  type?: keyof typeof InputTextType;
  title?: string;
  heightVal?: number;
  containerStyle?: StyleProp<ViewStyle>;
  clearTextField?: () => void;
  editable?: boolean;
  multiline?: boolean;
}

const InputText = (props: InputTextProps) => {
  const {
    placeholder = '',
    inputStyle,
    value: _providedValue = '',
    type: inputTypeText = InputTextType.normal,
    title,
    containerStyle,
    heightVal = scaler(50),
    handleChange,
    handleBlur,
    multiline = false,
    clearTextField = () => {},
    handleFocus = () => {},
  } = props;

  const showCloseButton = () => _providedValue.length > 0;

  const caluclatedTextInputWidthStyle = styles.inputStyles(
    inputTypeText === InputTextType.normal ? '100%' : '90%',
  );

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
          style={[caluclatedTextInputWidthStyle, inputStyle]}
          placeholderTextColor={theme.colors.placeholderTextColor}
          placeholder={placeholder}
          onChangeText={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={_providedValue}
          autoCorrect={false}
          blurOnSubmit={true}
          multiline={multiline}
          editable={props.editable !== undefined ? props.editable : true}
        />
        {inputTypeText === 'close' && showCloseButton() && (
          <View style={styles.closeButtonStyle}>
            <TouchableOpacity onPress={clearTextField}>
              <RoundClose />
            </TouchableOpacity>
          </View>
        )}
        {inputTypeText === 'search' && (
          <View style={styles.closeButtonStyle}>
            <TouchableOpacity>
              <SearchBar />
            </TouchableOpacity>
          </View>
        )}
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
  inputStyles: (width: string) => ({
    fontFamily: theme.fontFamily.OpenSansRegular,
    color: theme.colors.darkCharcoal,
    fontWeight: '400',
    paddingHorizontal: scaler(12),
    width: width,
    fontSize: scaler(16),
  }),
  closeButtonStyle: {
    justifyContent: 'center',
    paddingRight: scaler(12),
    width: '10%',
  },
  textBox: {
    paddingVertical: scaler(5),
  },
});
export default React.memo(InputText);
