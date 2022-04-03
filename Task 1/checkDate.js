function checkDate(timestamp) {
    const timestampToDate = new Date(timestamp * 1000);
    const day = timestampToDate.getUTCDate();
    const month = timestampToDate.getUTCMonth();
    const year = timestampToDate.getUTCFullYear();
    const hour = timestampToDate.getUTCHours();

    const currentDate = new Date(Date.now());
    const currentDay = currentDate.getUTCDate();
    const currentMonth = currentDate.getUTCMonth();
    const currentYear = currentDate.getUTCFullYear();
    let isSameDate = year === currentYear && month === currentMonth && day === currentDay;


    return {
        isSameDate: isSameDate,
        dayPeriod: hour > 11 ? 'pm' : 'am'
    }
}

