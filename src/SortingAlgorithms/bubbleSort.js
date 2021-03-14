export function getBubbleSortAnimations(array) {
  if(array.length <= 0) return array;
  const animations = [];
  const auxiliaryArray = array.slice();
  const size = auxiliaryArray.length;
  let m = size-2;
  while(m>=0) {
    let e=0;
    let f=1;
    while(e<=m) {
      if(auxiliaryArray[e]>auxiliaryArray[f]) {
        animations.push([e,f]);
        animations.push([e,f]);
        animations.push([e,auxiliaryArray[f]]);
        animations.push([f,auxiliaryArray[e]]);
        let g=auxiliaryArray[e];
        auxiliaryArray[e]=auxiliaryArray[f];
        auxiliaryArray[f]=g;
      }
      else {
        animations.push([e,f]);
        animations.push([e,f]);
        animations.push([e,auxiliaryArray[e]]);
        animations.push([f,auxiliaryArray[f]]);
      }
      e++;
      f++;
    }
    m--;
  }
  return animations;
}