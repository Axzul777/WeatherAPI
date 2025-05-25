import { Hono } from "hono";
import { config } from "dotenv";
import { GetCacheWeather, setCacheWeather } from "../services/cache.js";
import { getWeatherApi } from "../services/weatherApi.js";

const weather = new Hono()


weather.get('/', async (c) => {
    const city = c.req.query('city')



    if (!city) {
        return c.json({error: 'Missing city parameter'}, 400)
    }

    const cached = await GetCacheWeather(city);

    if (cached) {
        return c.json({source: 'cache', data: JSON.parse(cached)})
    }


    try {
        const data = await getWeatherApi(city)

        await setCacheWeather(city, data, 43200)

        return c.json({source: 'api', data: data})
    } catch (error) {
        return c.json({error: 'Failed to fetch weather data'}, 500)
    }
})


export const weatherRouter = weather;
