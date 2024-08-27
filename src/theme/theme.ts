import { createTheme } from '@shopify/restyle';
import { Colors, Fonts, Palette, Spacing } from '@constants';
import { scaler } from '@utils';

export const theme = createTheme({
  colors: Colors,
  spacing: Spacing, //TODO
  breakpoints: {},
  fontFamily: Fonts,
  textVariants: {
    normal: {
      fontSize: scaler(14),
      fontWeight: '500',
      lineHeight: scaler(20),
      fontFamily: Fonts.OpenSansRegular,
      color: 'blackOlive',
    },
    h1: {
      fontSize: scaler(36),
      fontWeight: '700',
      lineHeight: scaler(45),
      fontFamily: Fonts.OpenSansBold,
      color: 'blackOlive',
    },
    h2: {
      fontSize: scaler(32),
      fontWeight: '700',
      lineHeight: scaler(35),
      fontFamily: Fonts.OpenSansBold,
      color: 'blackOlive',
    },
    h3: {
      fontSize: scaler(22),
      fontWeight: '600',
      lineHeight: scaler(27.5),
      fontFamily: Fonts.OpenSansSemiBold,
      color: 'blackOlive',
    },
    h4: {
      fontSize: scaler(18),
      fontWeight: '600',
      lineHeight: scaler(22.5),
      fontFamily: Fonts.OpenSansSemiBold,
      color: 'blackOlive',
    },
    h5: {
      fontSize: scaler(16),
      fontWeight: '600',
      lineHeight: scaler(20),
      fontFamily: Fonts.OpenSansSemiBold,
      color: 'skobeloff',
    },
    bodyLarge: {
      fontSize: 34,
      fontWeight: '700',
      lineHeight: scaler(28),
      fontFamily: Fonts.OpenSansBold,
      color: 'skobeloff',
    },
    bodyLarge2: {
      fontSize: scaler(20),
      fontWeight: '400',
      lineHeight: scaler(28),
      fontFamily: Fonts.OpenSansRegular,
      color: 'blackOlive',
    },
    bodyMedium1: {
      fontSize: scaler(18),
      fontWeight: '700',
      lineHeight: scaler(26),
      fontFamily: Fonts.OpenSansBold,
      color: 'blackOlive',
    },
    bodyMedium2: {
      fontSize: scaler(18),
      fontWeight: '400',
      lineHeight: scaler(26),
      fontFamily: Fonts.OpenSansRegular,
      color: 'blackOlive',
    },
    bodyNormal1: {
      fontSize: scaler(16),
      fontWeight: '700',
      lineHeight: scaler(22),
      fontFamily: Fonts.OpenSansBold,
      color: 'blackOlive',
    },
    bodyNormal2: {
      fontSize: scaler(16),
      fontWeight: '400',
      lineHeight: scaler(22),
      fontFamily: Fonts.OpenSansRegular,
      color: 'blackOlive',
    },
    bodySmall1: {
      fontSize: scaler(14),
      fontWeight: '700',
      lineHeight: scaler(19),
      fontFamily: Fonts.OpenSansBold,
      color: 'blackOlive',
    },
    bodySmall2: {
      fontSize: scaler(14),
      fontWeight: '400',
      lineHeight: scaler(19),
      fontFamily: Fonts.OpenSansRegular,
      color: 'blackOlive',
    },
    bodySmall3: {
      fontSize: scaler(10),
      fontWeight: '400',
      lineHeight: scaler(19),
      fontFamily: Fonts.OpenSansRegular,
      color: 'blackOlive',
    },
    placeholder: {
      fontSize: scaler(14),
      fontWeight: '400',
      lineHeight: scaler(19),
      fontFamily: Fonts.OpenSansRegular,
      color: 'darkGrey',
    },
    label: {
      fontSize: scaler(16),
      fontWeight: '700',
      lineHeight: scaler(22),
      fontFamily: Fonts.OpenSansBold,
      color: 'blackOlive',
    },
    label2: {
      fontSize: scaler(12),
      fontWeight: '700',
      lineHeight: scaler(22),
      fontFamily: Fonts.OpenSansBold,
      color: 'blackOlive',
    },
    label3: {
      fontSize: scaler(8),
      fontWeight: '900',
      lineHeight: scaler(18),
      fontFamily: Fonts.OpenSansBold,
      color: 'blackOlive',
    },
    label4: {
      fontSize: scaler(18),
      fontFamily: Fonts.OpenSansBold,
      color: 'blackOlive',
    },
    label5: {
      fontSize: scaler(12),
      fontWeight: '700',
      lineHeight: scaler(25),
      fontFamily: Fonts.OpenSansBold,
      color: 'blackOlive',
    },
    label6: {
      fontSize: scaler(14),
      fontWeight: '700',
      lineHeight: scaler(15),
      fontFamily: Fonts.OpenSansBold,
      color: 'black',
    },
    message: {
      fontSize: scaler(12),
      fontWeight: '400',
      lineHeight: scaler(18),
      fontFamily: Fonts.OpenSansRegular,
      color: 'darkGrey',
    },
    error: {
      fontSize: scaler(12),
      fontWeight: '400',
      lineHeight: scaler(18),
      fontFamily: Fonts.OpenSansLight,
      color: 'red',
    },
    emptyText: {
      fontSize: scaler(14),
      fontWeight: '800',
      lineHeight: scaler(20),
      fontFamily: Fonts.OpenSansSemiBold,
      color: 'darkGrey',
    },
    greyText: {
      fontSize: scaler(6),
      fontWeight: '400',
      lineHeight: scaler(0),
      fontFamily: Fonts.OpenSansRegular,
      color: 'darkGrey',
    },
    svgText: {
      fontFamily: Fonts.OpenSansRegular,
      fontSize: scaler(8),
      fontWeight: '400',
      lineHeight: scaler(20),
      color: 'blackOlive',
    },
    docTitle: {
      fontSize: scaler(8),
      fontWeight: '900',
      lineHeight: scaler(10),
      fontFamily: Fonts.OpenSansBold,
      color: 'blackOlive',
    },
    meetingTitle: {
      fontSize: scaler(16),
      fontWeight: '800',
      lineHeight: scaler(18),
      fontFamily: Fonts.OpenSansBold,
      color: 'black',
    },
    whiteText: {
      fontSize: scaler(8),
      fontWeight: '700',
      lineHeight: scaler(0),
      fontFamily: Fonts.OpenSansRegular,
      color: 'white',
    },
    countText: {
      fontFamily: Fonts.OpenSansRegular,
      fontSize: scaler(8),
      color: 'white',
      fontWeight: '800',
    },
    bottomTabCountText: {
      fontFamily: Fonts.OpenSansRegular,
      fontSize: scaler(10),
      color: 'white',
      fontWeight: '500',
      textAlign: 'center',
      lineHeight: scaler(15),
    },
    tabletButtonText: {
      fontSize: scaler(16),
      fontWeight: '500',
      lineHeight: scaler(19),
      fontFamily: Fonts.OpenSansRegular,
      color: 'blackOlive',
    },
    warningTextiPad: {
      color: 'red',
      fontSize: 16,
      fontFamily: Fonts.OpenSansRegular,
      fontWeight: '300',
      lineHeight: scaler(15),
    },
    userLabel: {
      fontSize: scaler(14),
      fontWeight: '700',
      lineHeight: scaler(0),
      fontFamily: Fonts.OpenSansBold,
      color: 'black',
    },
    moreListLabel: {
      fontSize: scaler(12),
      fontWeight: '500',
      lineHeight: scaler(19),
      // fontFamily: Fonts.OpenSansBold,
      color: 'darkCharcoal',
    },
    bodySmall2Ipad: {
      fontSize: scaler(12),
      fontWeight: '400',
      lineHeight: scaler(19),
      fontFamily: Fonts.OpenSansRegular,
      color: 'blackOlive',
    },
  },
});

const dark: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    backgroundColor: Palette.black,
  },
};

export type Theme = typeof theme;

export const lightTheme: Theme = {
  ...theme,
};

export const darkTheme: Theme = {
  ...dark,
};
