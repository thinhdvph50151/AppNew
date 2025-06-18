import { configureStore, createSlice } from "@reduxjs/toolkit";
import React from "react";
import { Button, View } from "react-native";
import { Text } from "react-native-elements";
import { Provider, useDispatch, useSelector } from "react-redux";

const counterSlice = createSlice({
  name :'counter',
  initialState : {value:0},
  reducers :{
    increment : (state)=>{
      state.value += 10
    },
    decrement : (state)=>{
      state.value -=10
    }
  }
})

const {increment, decrement} = counterSlice.actions

//store

const store = configureStore({
  reducer :{
    banana : counterSlice.reducer
  }
})

const CounterApp= ()=>{
  const d = useSelector(((state:any)=>state.banana.value))
  const dispatch = useDispatch()
  return (
    <View>
      <Text>{d}</Text>
      <Button title="tang" onPress={()=>dispatch(increment())}/>
      <Button title="giam" onPress={()=>dispatch(decrement())}/>
    </View>
  )
}

const Search = ()=>{
  return (
    <Provider store={store}>
      <CounterApp/>
    </Provider>
  )
}
export default Search