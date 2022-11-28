import React from 'react';
import { View, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';


const DateTimePicker = ({ date, setDate, open, setOpen, minDate, maxDate }) => {
  return <DatePicker 
      modal 
      date={date} 
      open={open}
      minimumDate={minDate}
      maximumDate={maxDate}
      mode={"date"}
      onConfirm={(date) => {          
        setOpen(setOpen)
        setDate(date)
      }}
      onCancel={() => {
        setOpen(setOpen)
      }} 
    />
}

export default DateTimePicker