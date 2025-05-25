import { Redis } from "ioredis";


const redis = new Redis ();

export async function GetCacheWeather(city: string) {
    return await redis.get(city.toLocaleLowerCase())
}

export async function setCacheWeather(city: string, data: any, ttlSeconds: number) {
    await redis.set(city.toLowerCase(), JSON.stringify(data), 'EX', ttlSeconds)
}

