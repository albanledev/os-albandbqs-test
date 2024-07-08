

/**
 * Permet de calculer une moyenne des valeurs d'un tableau
 * @param  {number[]} data - un tableau de nombres
 * @returns {number} - la moyenne des valeurs du tableau
 */
export default function average(data) {
    return data.reduce((a, b) => a + b) / data.length;
    }