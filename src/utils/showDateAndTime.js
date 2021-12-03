const monthsEn = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];
const monthsRu = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];
const weekEn = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
const weekRu = [
    'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
];
const weekShortEn = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
];
const weekShortRu = [
    'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'
]

export function showDate(offset, language) {
    const currentD = getDateWithOffset(offset);
    const d = new Date(currentD);
    const dayShort = language === 'en' ? weekShortEn[d.getDay()] : weekShortRu[d.getDay()];
    const day = d.getDate();
    const month = language === 'en' ? monthsEn[d.getMonth()] : monthsRu[d.getMonth()];
    return `${dayShort} ${day} ${month}`;
}

export function showTime(offset) {
    return new Date(getDateWithOffset(offset)).toLocaleTimeString();
}

export function showWeekDay(offset, n, language) {
    const currentD = getDateWithOffset(offset)
    const d = new Date(currentD);
    const i = d.getDay();
    const index = i + n > 6 ? (i + n - 7) : i + n

    return language === 'en' ? weekEn[index] : weekRu[index];
}

function getDateWithOffset(offset) {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;

    return utc + (1000 * offset);
}



