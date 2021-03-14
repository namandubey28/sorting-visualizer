export function getQuickSortAnimations(array) {
  if(array.length < 0) return array;
  const animations = [];
  const auxiliaryArray = array.slice();
  quickSort(auxiliaryArray,0, auxiliaryArray.length-1, animations);
  return animations;
}

function quickSort(auxiliaryArray, lb, ub, animations) {
  let partitionPoint;
  if(ub<=lb) {
    return;
  }
  partitionPoint = partition(auxiliaryArray, lb, ub, animations);
  quickSort(auxiliaryArray,lb,partitionPoint-1,animations);
  quickSort(auxiliaryArray,partitionPoint+1,ub,animations);
}

function partition(auxiliaryArray,lb,ub,animations) {
  let e,f,num;
  num=auxiliaryArray[lb];
  e=lb;
  f=ub;
  while(1) {
    while(1) {
      if(e===ub || auxiliaryArray[e]>num) break;
      animations.push([0,e,e]);
      animations.push([0,e,e]);
      e++;
    }
    while(1) {
      if(f===lb || auxiliaryArray[f]<=num) break;
      animations.push([0,f,f]);
      animations.push([0,f,f]);
      f--;
    }
    if(e<f) {
      animations.push([0,e,f]);
      animations.push([0,e,f]);
      animations.push([1,e,auxiliaryArray[f]]);
      animations.push([1,f,auxiliaryArray[e]]);
      let g=auxiliaryArray[e];
      auxiliaryArray[e]=auxiliaryArray[f];
      auxiliaryArray[f]=g;
    }
    else {
      animations.push([0,lb,f]);
      animations.push([0,lb,f]);
      animations.push([1,lb,auxiliaryArray[f]]);
      animations.push([1,f,auxiliaryArray[lb]]);
      let g=auxiliaryArray[lb];
      auxiliaryArray[lb]=auxiliaryArray[f];
      auxiliaryArray[f]=g;
      break;
    }
  }
  return f;
}