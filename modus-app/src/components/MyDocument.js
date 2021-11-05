import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
function MyDocument({entry}) {
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{entry[0].title}</Text>
      </View>
      <View style={styles.section}>
        <Text>{entry[0].text}</Text>
      </View>
    </Page>
  </Document>
} export default MyDocument;