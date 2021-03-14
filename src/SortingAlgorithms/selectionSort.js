export function getSelectionSortAnimations(array) {
  if(array.length<0) return;
  const animations = [];
  const auxiliaryArray = array.slice();
  selectionSort(auxiliaryArray, auxiliaryArray.length, animations);
  return animations;
}

function selectionSort(auxiliaryArray, size, animations) {
  let e,f,m,g;
  e=0;
  while(e<=size-2) {
    m=e;
    f=e+1;
    while(f<=size-1) {
      animations.push([0,m,f]);
      animations.push([0,m,f]);
      if(auxiliaryArray[f]<auxiliaryArray[m]) m=f;
      f++;
    }
    animations.push([0,e,m]);
    animations.push([0,e,m]);
    animations.push([1,e,auxiliaryArray[m]]);
    animations.push([1,m,auxiliaryArray[e]]);
    g=auxiliaryArray[e];
    auxiliaryArray[e]=auxiliaryArray[m];
    auxiliaryArray[m]=g;
    e++;
  }
}