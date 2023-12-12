function timeConvector(time) {
    const min = String(Math.floor(time / 60)).padStart(2, '0');
    const sec = String(Math.floor(time - min * 60)).padStart(2, '0');
    return `${min}:${sec}`
}

export default timeConvector