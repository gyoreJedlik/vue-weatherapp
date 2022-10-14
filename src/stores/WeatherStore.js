import { defineStore } from "pinia";
import Axios from 'axios'

export const useWeatherStore = defineStore({
    id:'weather',
    state:()=>({
        weatherData : []
    }),
    getters: {},
    actions: {
        getWeatherData(){
            Axios.get('https://api.open-meteo.com/v1/forecast?latitude=47.4984&longitude=19.0408&daily=temperature_2m_max,temperature_2m_min&timezone=auto')
            .then(resp =>{
                this.weatherData = resp.data.daily;
                //console.log(resp);
            })
        }
    },
});