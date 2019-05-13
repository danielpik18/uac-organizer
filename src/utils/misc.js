export const CapitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}