/**
 *
 * @param {any[]} comb current combination
 * @param {any[]} rests origin array
 * @param {any[][]} output result
 * @param {number} n pick n elements from rests
 * @returns {void}
 */
const combinationsWithReplacement = (comb, rests, output, n) => {
  if (comb.length == n) {
    return output.push(comb);
  }
  rests.forEach((item, idx) => {
    combinationsWithReplacement([...comb, item], rests.slice(idx), output, n);
  });
};

module.exports = combinationsWithReplacement;
