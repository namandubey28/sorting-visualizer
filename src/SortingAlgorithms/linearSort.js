export function getLinearSortAnimations(array) {
  const animations = [];
  if(array.length<=1) return array;
  const auxiliaryArray = array.slice();
  const size = auxiliaryArray.length;
  for(let i=0;i<size-1;i++) {
    for(let j=i+1;j<size;j++) {
      if(auxiliaryArray[i]<auxiliaryArray[j]) {
        animations.push([i,j]);
        animations.push([i,j]);
        animations.push([i, auxiliaryArray[i]]);
        animations.push([j, auxiliaryArray[j]]);
      }
      else {
        animations.push([i,j]);
        animations.push([i,j]);
        animations.push([i, auxiliaryArray[j]]);
        animations.push([j, auxiliaryArray[i]]);
        let g = auxiliaryArray[i];
        auxiliaryArray[i] = auxiliaryArray[j];
        auxiliaryArray[j] = g;
      }
    }
  }
  return animations;
}