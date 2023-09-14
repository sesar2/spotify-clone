export const renderNames = (arr) => {
    const nameString = arr.reduce((acc, curr) => {
        if (acc === '') {
            return curr.name;
        } else {
            return acc + ', ' + curr.name;
        }
    }, '');
    return nameString;
};