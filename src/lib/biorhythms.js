import dayjs from 'dayjs';


export function calculateBiorhythms(dateOfBirth, targetDate) {
    return {
        physical: calculateBiorhythm(dateOfBirth, targetDate, 23), 
        emotional: calculateBiorhythm(dateOfBirth, targetDate, 28), 
        intellectual: calculateBiorhythm(dateOfBirth, targetDate, 33), 
    };
}

export function calculateBiorhythmsSeries(birthDate, centralDate, range) {
    const series = [];
    const centralDay = dayjs(centralDate);
    for (let diff = -range; diff <= range; diff++) {
        const targetDay = centralDay.add(diff, 'day');
        const biorhythms = calculateBiorhythms(birthDate, targetDay);
        series.push({date: targetDay.format('D MMM'), ...biorhythms});
    }
    return series;
}

function calculateBiorhythm(dateOfBirth, targetDate, cycle) {
    const birthDay = dayjs(dateOfBirth);
    const targetDay = dayjs(targetDate);
    const diff = targetDay.diff(birthDay, 'day');
    return Math.sin(2 * Math.PI * diff / cycle);
}
