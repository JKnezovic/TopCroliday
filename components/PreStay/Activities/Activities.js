import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ActivitiesTile from './ActivitiesTile';




const Activities = ({activities, changeSelection, selectedActivities, setSelection}) => {
  const items = activities.map(item =>
    <ActivitiesTile key={item.id} item={item} changeSelection={()=>changeSelection(setSelection,item.id)} isSelected = {selectedActivities[item.id]}/>)

  return (
        <View style={styles.container}>
              {items}
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  child: {
    flexBasis: '50%'
    
  }
});

export default Activities;