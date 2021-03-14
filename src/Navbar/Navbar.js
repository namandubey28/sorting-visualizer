import React from 'react';
import Select from 'react-select';
import './Navbar.scss';

export default class Navbar extends React.Component {
  disableNavbarElements() {
      document.getElementById('sortButton').disabled=true;
      document.getElementById('speedSlider').disabled=true;
  }

  enableNavbarElements() {
      document.getElementById('sortButton').disabled=false;
      document.getElementById('speedSlider').disabled=false;
  }

  render() {
    const options = [
      {label: "Merge Sort", value: "MERGE_SORT"},
      {label: "Quick Sort", value: "QUICK_SORT"},
      {label: "Insertion Sort", value: "INSERTION_SORT"},
      {label: "Bubble Sort", value: "BUBBLE_SORT"},
      {label: "Linear Sort", value: "LINEAR_SORT"},
      {label: "Selection Sort", value: "SELECTION_SORT"},
      {label: "Heap Sort", value: "HEAP_SORT"},
  ];

  const { selectAlgorithm, resetArray, sort, changeAnimationSpeed } = this.props;

    return (
      <nav className="navBar">
        <div className="dropDown">
          <button onClick={resetArray} id="resetButton">Reset Array</button>
          <button onClick={sort} id="sortButton">Sort</button>
          <input id="speedSlider" type="range" className="custom-range" min={0} max={100} defaultValue={50} onChange={changeAnimationSpeed}/>
          <Select id="algorithmDropdown" onChange={selectAlgorithm} className="selectStyle" options={options}></Select>
        </div>
      </nav>
    )
  }
}