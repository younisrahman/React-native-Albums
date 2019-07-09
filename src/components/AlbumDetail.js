import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'

const AlbumDetail = (prop) => {
  return (
    <Card>
      <CardSection>
        <Text>{prop.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
