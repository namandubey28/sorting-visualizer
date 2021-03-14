export function getHeapSortAnimations(array) {
  if(array.length<0) return array;
  const auxiliaryArray = array.slice();
  const animations = [];
  heapSort(auxiliaryArray,auxiliaryArray.length,animations);
  return animations;
}

function heapSort(auxiliaryArray,size,animations) {
  let k,j,i,m,g;
  let startIndex=0;
  i=1;
  while(i<size) {
    m=i;
    do {
      k=Math.floor((m-1)/2);
      if(auxiliaryArray[k]<auxiliaryArray[m]) {
        animations.push([k,m]);
        animations.push([k,m]);
        animations.push([k,auxiliaryArray[m]]);
        animations.push([m,auxiliaryArray[k]]);
        g=auxiliaryArray[k];
        auxiliaryArray[k]=auxiliaryArray[m];
        auxiliaryArray[m]=g;
      }
      m=k;
    }while(m!==0)
    i++;
  }
  for(j=size-1;j>=0;j--) {
    animations.push([startIndex,j]);
    animations.push([startIndex,j]);
    animations.push([startIndex,auxiliaryArray[j]]);
    animations.push([j,auxiliaryArray[startIndex]]);
    g=auxiliaryArray[startIndex];
    auxiliaryArray[startIndex]=auxiliaryArray[j];
    auxiliaryArray[j]=g;
    k=0;
    do {
      m=2*k+1;
      if(auxiliaryArray[m]<auxiliaryArray[m+1] && m<j-1) {
        m++;
      }
      if(auxiliaryArray[k]<auxiliaryArray[m] && m<j) {
        animations.push([k,m]);
        animations.push([k,m]);
        animations.push([k,auxiliaryArray[m]]);
        animations.push([m,auxiliaryArray[k]]);
        g=auxiliaryArray[k];
        auxiliaryArray[k]=auxiliaryArray[m];
        auxiliaryArray[m]=g;
      }
      k=m;
    }while(m<j);
  }
}