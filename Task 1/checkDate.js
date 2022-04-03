function checkDate(timestamp) {
    //заменила множественное создание объекта на единственное в целях оптимизации
    const timestampToDate = new Date(timestamp * 1000);
    //попробовала исправить проблему с timezones
    const day = timestampToDate.getUTCDate();
    const month = timestampToDate.getUTCMonth();
    const year = timestampToDate.getUTCFullYear();
    const hour = timestampToDate.getUTCHours();
    //немного поменяла именование переменных для более аккуратного вида
    const currentDate = new Date(Date.now());
    const currentDay = currentDate.getUTCDate();
    const currentMonth = currentDate.getUTCMonth();
    const currentYear = currentDate.getUTCFullYear();
    //заменила блок if на простое присваивание
    let isSameDate = year === currentYear && month === currentMonth && day === currentDay;

    return {
        isSameDate: isSameDate,
        dayPeriod: hour > 11 ? 'pm' : 'am'
    }
}

