import React from 'react';
import { NativeModules, View,Button } from 'react-native';
import ViewNativeComponent from 'react-native/Libraries/Components/View/ViewNativeComponent';

const { CalendarModule } = NativeModules;
const NewModuleButton = () => {
  const onPress = () => {
    CalendarModule.createCalendarEvent('Bhawna Verma', 'New Delhi')
    console.log('We will invoke the native module here!');
  };

  return (
    <View style={{flex:1, justifyContent:'center', backgroundColor:'#FBD6D2'}}>
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
   />
   </View>
  );
};

export default NewModuleButton;