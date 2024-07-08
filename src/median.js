/**
 * Calculer le médian d'un tableau de nombres
 * @param  {number[]} data - un tableau de nombres
 * @returns {number} - le médian des valeurs du tableau
 */

export default function median(data){
    let median = 0;
    let dataLength = data.length;
    let dataSort = data.sort((a, b) => a - b);
    if (dataLength % 2 === 0) {
        median = (dataSort[dataLength / 2 - 1] + dataSort[dataLength / 2]) / 2;
    } else {
        median = dataSort[(dataLength - 1) / 2];
    }
    return median;
}