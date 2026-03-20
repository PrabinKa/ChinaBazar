import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { layout, rh, spacing } from '../../utils';
import { colors, radius } from '../../theme';

type Props = {
  mode?: 'button' | 'input';
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
  onSubmit?: () => void;
};

export const SearchBar = ({
  mode = 'button',
  placeholder = 'Search for products...',
  value,
  onChangeText,
  onPress,
  onSubmit,
}: Props) => {
  const isButton = mode === 'button';

  const Container = isButton ? Pressable : View;

  return (
    <Container
      {...(isButton && { onPress })}
      style={[styles.container, layout.spaceBetweenRow]}
    >
      <View style={[layout.centerRow, {flex: 1}]}>
        <Ionicons
          name="search-outline"
          size={18}
          color={colors.textSecondary}
        />

        {isButton ? (
          <Text style={styles.placeholder}>{placeholder}</Text>
        ) : (
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={colors.textSecondary}
            style={styles.input}
            returnKeyType="search"
            onSubmitEditing={onSubmit}
          />
        )}
      </View>

      {/* Right Button */}
      <Pressable style={[styles.button, layout.center]} onPress={onSubmit}>
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: rh(48),
    backgroundColor: colors.background,
    paddingLeft: spacing(12),
    paddingRight: spacing(5),
    borderRadius: radius.full,
    marginHorizontal: spacing(5),
    borderColor: colors.primary,
    borderWidth: 1.5,
  },
  placeholder: {
    marginLeft: spacing(8),
    color: colors.textSecondary,
  },
  input: {
    marginLeft: spacing(8),
    flex: 1,
    color: colors.textPrimary,
  },
  button: {
    backgroundColor: colors.primary,
    height: rh(40),
    paddingHorizontal: spacing(14),
    borderRadius: radius.full,
  },
  buttonText: {
    color: colors.textOnPrimary,
    fontSize: 12,
  },
});