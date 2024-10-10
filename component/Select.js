import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Select = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
  ]);

  return (
    <DropDownPicker
      placeholder='지역'
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.select}
    />
  );
}

const styles = StyleSheet.create({
  select: {
    borderColor: '#E7E9ED',
    borderRadius: 6,
  },
})

export default Select