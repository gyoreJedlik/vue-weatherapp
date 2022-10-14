<template>
    <table class="table">
        <thead>
            <tr>
                <th>Dátum &#128197;</th>
                <th>Min. &#8451;</th>
                <th>Max. &#8451;</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in weatherData.time" :key="index">
                <td>{{ item }}</td>
                <td>{{ weatherData.temperature_2m_min[index] }}</td>
                <td>{{ weatherData.temperature_2m_max[index] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
    import { storeToRefs } from 'pinia'
    import {useWeatherStore} from '../stores/WeatherStore' 

    const {getWeatherData} = useWeatherStore();
    getWeatherData();

    const {weatherData} = storeToRefs(useWeatherStore());
    //console.log(weatherData);
</script>

<style>

</style>