const weathers = [
    { weather: "sunny", symbol: "☀️" },
    { weather: "sunnyWithCloud", symbol: "🌤" },
    { weather: "rainyWithSun", symbol: "🌦" },
    { weather: "cloudy", symbol: "☁️" },
    { weather: "rainy", symbol: "🌧" },
    { weather: "rainyWithLightning", symbol: "⛈" },
    { weather: "cloudWithLightning", symbol: "🌩" },
    { weather: "rainbow", symbol: "🌈" },
    { weather: "windy", symbol: "🌬" },
    { weather: "foggy", symbol: "🌫" },
    { weather: "snowy", symbol: "❄️" },
];

const getWeather = (weather) => {
    return weathers.find((w) => w.weather === weather).symbol;
};

const getCurrentDateObj = () => {
    const Day = ["Sun.", "Mon.", "Tue.", "Wed.", "Thurs.", "Fri.", "Sat."];
    const currentDate = new Date();
    const year = `${currentDate.getFullYear()}`;
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const date = currentDate.getDate().toString().padStart(2, "0");
    const day = `${Day[currentDate.getDay()]}`;
    return { year, month, date, weekday: day };
};

const weekday = ["Mon.", "Tue.", "Wed.", "Thurs.", "Fri.", "Sat.", "Sun."];

const getWeekday_MDY = (specificDate, splitStr) => {
    let [month, date, year] = specificDate.split(splitStr);
    let dateString = `${year}-${month}-${date}`;
    return weekday[new Date(dateString).getDay()];
};

const getWeekday_YMD = (specificDate, splitStr) => {
    let [year, month, date] = specificDate.split(splitStr);
    let dateString = `${year}-${month}-${date}`;
    return weekday[new Date(dateString).getDay()];
};

export {
    weathers,
    getWeather,
    getCurrentDateObj,
    getWeekday_MDY,
    getWeekday_YMD,
};
