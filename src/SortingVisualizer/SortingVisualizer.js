import React from 'react';
import Navbar from '../Navbar/Navbar';
import './SortingVisualizer.scss';
import { getMergeSortAnimations } from '../SortingAlgorithms/mergeSort';
import { getLinearSortAnimations } from '../SortingAlgorithms/linearSort';
import { getBubbleSortAnimations } from '../SortingAlgorithms/bubbleSort';
import { getInsertionSortAnimations } from '../SortingAlgorithms/insertionSort';
import { getQuickSortAnimations } from '../SortingAlgorithms/quickSort';
import { getSelectionSortAnimations } from '../SortingAlgorithms/selectionSort';
import { getHeapSortAnimations } from '../SortingAlgorithms/heapSort';

const { innerWidth, innerHeight } = window;
const NUMBER_OF_ARRAY_BARS = Math.floor((innerWidth-200)/25);
const PRIMARY_COLOR = 'turquoise';
let ANIMATION_SPEED_MS = 1;
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      algorithm: '',
    };
    this.resetArray = this.resetArray.bind(this);
    this.selectAlgorithm = this.selectAlgorithm.bind(this);
    this.sort = this.sort.bind(this);
  }

  componentDidMount() {
    this.resetArray();
  }

  selectAlgorithm(event) {
    this.setState({
      algorithm: event.value
    });
  }

  changeAnimationSpeed(event) {
    ANIMATION_SPEED_MS = event.target.value;
  }

  sort(event) {
    if(this.state.algorithm === '') {
      alert('Select an algorithm');
      return;
    }
    this.refs.navbar.disableNavbarElements();
    if(this.state.algorithm === 'MERGE_SORT') {
      this.mergeSort(event);
      return;
    }
    if(this.state.algorithm === 'LINEAR_SORT') {
      this.linearSort(event);
      return;
    }
    if(this.state.algorithm === 'BUBBLE_SORT') {
      this.bubbleSort(event);
      return;
    }
    if(this.state.algorithm === 'INSERTION_SORT') {
      this.insertionSort(event);
      return;
    }
    if(this.state.algorithm === 'QUICK_SORT') {
      this.quickSort(event);
      return;
    }
    if(this.state.algorithm === 'SELECTION_SORT') {
      this.selectionSort(event);
      return;
    }
    if(this.state.algorithm === 'HEAP_SORT') {
      this.heapSort(event);
      return;
    }
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, innerHeight-145));
    }
    this.refs.navbar.enableNavbarElements();
    this.setState({
      array,
    });
  }

  heapSort(e) {
    e.preventDefault();
    e.stopPropagation();
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      let isColorChange;
      if(i%4 === 2 || i%4 === 3) isColorChange=false;
      else isColorChange=true;
      // const isColorChange = (i % 4 !== 2 || i % 4 !== 3);
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = (i % 4 === 0)? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  mergeSort(e) {
    e.preventDefault();
    e.stopPropagation();
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  linearSort(e) {
    e.preventDefault();
    e.stopPropagation();
    const animations = getLinearSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      let isColorChange;
      if(i%4 === 2 || i%4 === 3) isColorChange=false;
      else isColorChange=true;
      // const isColorChange = (i % 4 !== 2 || i % 4 !== 3);
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = (i % 4 === 0)? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort(e) {
    e.preventDefault();
    e.stopPropagation();
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      let isColorChange;
      if(i % 4 === 2 || i % 4 === 3) isColorChange=false;
      else isColorChange=true;
      // const isColorChange = (i % 4 !== 2 || i % 4 !== 3);
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = (i % 4 === 0)? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  insertionSort(e) {
    e.preventDefault();
    e.stopPropagation();
    const animations = getInsertionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort(e) {
    e.preventDefault();
    e.stopPropagation();
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      if (animations[i][0]===0) {
        const [index, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [index, barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  selectionSort(e) {
    e.preventDefault();
    e.stopPropagation();
    const animations = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      if (animations[i][0]===0) {
        const [index, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [index, barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }
  
  render() {
    const { array } = this.state;

    return (
      <div>
        <Navbar ref="navbar" resetArray={this.resetArray} sort={this.sort} selectAlgorithm={this.selectAlgorithm} changeAnimationSpeed={this.changeAnimationSpeed}></Navbar>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`
              }}></div>
          ))}
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
