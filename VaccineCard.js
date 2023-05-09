import React from 'react';
import {View, Text, Image} from 'react-native';

const VaccineCard = ({name, date, dose, image, upcomingDose}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{date}</Text>
      <Text>{dose}</Text>
      <Image source={{uri: image}} style={{width: 100, height: 100}} />
      {upcomingDose && <Text>{upcomingDose}</Text>}
    </View>
  );
};

export default VaccineCard;
