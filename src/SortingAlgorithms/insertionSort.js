export function getInsertionSortAnimations(array) {
  if(array.length < 0) return array;
  const animations = [];
  const auxiliaryArray = array.slice();
  let lb = 0;
  let ub = auxiliaryArray.length - 1;
  let y = lb + 1;
  let num,j;
  while(y<=ub) {
    num=auxiliaryArray[y];
    j=y-1;
    while(j>=lb && auxiliaryArray[j]>num) {
      animations.push([j,j+1]);
      animations.push([j,j+1]);
      animations.push([j+1, auxiliaryArray[j]]);
      auxiliaryArray[j+1]=auxiliaryArray[j];
      j--;
    }
    animations.push([j+1,j+1]);
    animations.push([j+1,j+1]);
    animations.push([j+1,num]);
    auxiliaryArray[j+1]=num;
    y++;
  }
  return animations;
}