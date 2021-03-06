import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../Theme';

type PropTypes = {
  title: string;
};

const styles = StyleSheet.create({
  h2: {
    color: colors.primary,
    paddingTop: 16,
    fontSize: 22,
    fontWeight: '800',
  },
});

function H1(props: PropTypes) {
  return <Text style={styles.h2}>{props.title}</Text>;
}

export default H1;
