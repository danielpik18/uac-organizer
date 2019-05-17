export const CapitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}

export const cutTextIfLongerThan = (limit, text, chars) => {
    return text.length > limit ?
        text.slice(0, chars) + '...'
        : text;
}