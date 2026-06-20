export default function analyzeArray(array) {
  const object = {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  };
  object.length = array.length;
  if (array.length === 0) return object;
  object.max = Math.max(...array);
  object.min = Math.min(...array);
  object.average =
    array.reduce((acc, currentValue) => acc + currentValue, 0) / array.length;
  return object;
}
