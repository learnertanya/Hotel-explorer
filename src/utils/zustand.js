// propertyStore.js
import {create} from 'zustand';
import data from "../data.json"
import {defaultItems} from '../constants/defaultIndex'

const cities = function(data) {
  let hset = new Set()
  for(const element of data) {
    const {city} = element
    hset.add(city)
  }
  return hset;
}
const initialData = function(city) {
  return data.filter(element => element.city === city)
}

const usePropertyStore = create((set) => ({
  cityData: cities(data),
  activeTab: 'New York',
  hotelData : initialData('New York'),
  currentIndex: defaultItems,
  setCurrentIndex : (index) => set((state) => ({...state,currentIndex:index})),
  setHotelData : (city) => set((state) => ({...state,hotelData:data.filter(element => element.city === city),activeTab:city})),
}));

export default usePropertyStore;
