import dotenv from 'dotenv';

dotenv.config()


async function requestApi() {
    let res = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tampa?key=' + process.env.WEATHER_API_KEY)

    // let data = res
    return res.json()
}


// app.route('/api/weather', weatherRouter)
// app.get('/shows', async (c) => {
//   const res = await requestApi()
//   return c.json({data: res})
// })


export async function getWeatherApi(citiy:string) {
    const weatherApiKey = process.env.WEATHER_API_KEY;

    const res = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + citiy + '?key=' + weatherApiKey)

    // console.log(res);

    if (!res.ok) {
        throw Error('Error fetching the Api')
    }

    const data = res.json()

    return data
}

