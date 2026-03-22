import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { rf, spacing } from '../../utils/responsive';
import { COLORS } from '../../theme/colors';

export type ButtonVariant = 'filled' | 'outlined' | 'text';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  flex?: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  paddingVertical?: number;
  paddingHorizontal?: number;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'filled',
  disabled = false,
  loading = false,
  flex,
  style,
  textStyle,
  textColor,
  backgroundColor,
  borderColor,
  borderWidth,
  borderRadius = 50,
  fontSize = rf(15),
  fontWeight = '600',
  paddingVertical = spacing(14),
  paddingHorizontal,
}) => {
  const getContainerStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      flex: flex,
      borderRadius,
      paddingVertical,
      paddingHorizontal: paddingHorizontal ?? spacing(16),
      justifyContent: 'center',
      alignItems: 'center',
      opacity: disabled ? 0.6 : 1,
    };

    switch (variant) {
      case 'filled':
        return {
          ...baseStyle,
          backgroundColor: backgroundColor ?? COLORS.primary,
        };
      case 'outlined':
        return {
          ...baseStyle,
          backgroundColor: backgroundColor ?? 'transparent',
          borderWidth: borderWidth ?? 1.5,
          borderColor: borderColor ?? COLORS.primary,
        };
      case 'text':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          paddingHorizontal: 0,
        };
      default:
        return baseStyle;
    }
  };

  const getTextStyle = (): TextStyle => {
    const baseTextStyle: TextStyle = {
      fontSize,
      fontWeight,
    };

    if (textColor) {
      return { ...baseTextStyle, color: textColor };
    }

    switch (variant) {
      case 'filled':
        return { ...baseTextStyle, color: COLORS.textOnPrimary };
      case 'outlined':
      case 'text':
        return { ...baseTextStyle, color: textColor ?? COLORS.primary };
      default:
        return baseTextStyle;
    }
  };

  return (
    <TouchableOpacity
      style={[getContainerStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'filled' ? COLORS.textOnPrimary : COLORS.primary}
          size="small"
        />
      ) : (
        <Text style={[getTextStyle(), textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
