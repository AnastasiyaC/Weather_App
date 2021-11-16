import clearDay from "../assets/weatherIcons/clear-day.svg";
import clearNight from "../assets/weatherIcons/clear-night.svg";
import fewCloudsDay from "../assets/weatherIcons/few-clouds-day.svg";
import fewCloudsNight from "../assets/weatherIcons/few-clouds-night.svg";
import scatteredCloudy from "../assets/weatherIcons/scattered-cloudy.svg";
import brokenClouds from "../assets/weatherIcons/broken-clouds.svg";
import showerRain from "../assets/weatherIcons/shower-rain.svg";
import rain from "../assets/weatherIcons/rain.svg";
import thunderstormsDay from "../assets/weatherIcons/thunderstorms-day.svg";
import thunderstormsNight from "../assets/weatherIcons/thunderstorms-night.svg";
import snow from "../assets/weatherIcons/snow.svg";
import mist from "../assets/weatherIcons/mist.svg";


export const weatherIcons = {
    '01d': clearDay, //clear sky done
    '01n': clearNight,//done
    '02d': fewCloudsDay,   //few clouds done
    '02n': fewCloudsNight,  //done
    '03d': scatteredCloudy,   //scattered clouds done
    '03n': scatteredCloudy,  //done
    '04d': brokenClouds,  //broken clouds done
    '04n': brokenClouds, //done
    '09d': showerRain,  //	shower rain done
    '09n': showerRain,   //done
    '10d': rain,  //	rain done
    '10n': rain,  //done
    '11d': thunderstormsDay,  //	thunderstorm done
    '11n': thunderstormsNight, // done
    '13d': snow,  //snow done
    '13n': snow,   //done
    '50d': mist,  //	mist done
    '50n': mist,  //done
};