/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, newColor) => {
  return flood(image, sr, sc, newColor, image[sr][sc]);
};

const flood = (image, sr, sc, newColor, targetColor) => {
  if (image[sr][sc] === newColor ||image[sr][sc] !== targetColor) return image;
  
  image[sr][sc] = newColor
  
  if (isValid(image, sr + 1, sc)) flood(image, sr + 1, sc, newColor, targetColor);
  if (isValid(image, sr - 1, sc)) flood(image, sr - 1, sc, newColor, targetColor);
  if (isValid(image, sr, sc + 1)) flood(image, sr, sc + 1, newColor, targetColor);
  if (isValid(image, sr, sc - 1)) flood(image, sr, sc - 1, newColor, targetColor);
  
  return image;  
}

const isValid = (image, sr, sc) => {
  return ((sr > -1) && (sr < image.length) && (sc > -1) && (sc < image[0].length));
}
