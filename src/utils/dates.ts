export const formatTimeStampToDate = (timestamp:number) => {
    return new Date(timestamp*1000).toLocaleDateString('ru-RU', {day:"2-digit", month:"2-digit", year:"numeric"})
}