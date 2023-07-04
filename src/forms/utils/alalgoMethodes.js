export const makeFirstLetterCapital = (text) => {
    const firstCapitalText = text.charAt(0).toUpperCase() + text.slice(1);
    console.log(firstCapitalText);
}