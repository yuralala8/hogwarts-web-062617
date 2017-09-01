import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import HogsLister from './components/HogsLister'
import Hogs from './porkers_data'
import SortBy from './components/SortBy'
import FilterBy from './components/FilterBy'


class App extends Component {
	constructor(){
		super()

		this.state = {
			hogs: [],
			sortType: "all",
			greased: false
		}
	}

	componentWillMount() {
		this.setState({
			hogs: Hogs
		})
	}

	handleChange = (event) => {
		event.persist()
		this.setState({
			sortType: event.target.value
		},
		() => {
			if (event.target.value === "name") {
			this.sortByName()
		} else if (event.target.value === "weight") {
			this.sortByWeight()
			}
		})
	}

	handleClick = (event) => {
		this.setState({
			greased: this.state.greased ? false : true
		},
		() => {
			if (this.state.greased === false) {
				this.setState({
					hogs: 
						this.state.hogs.filter((hog) => hog.greased === false)
				})
			} else {
				this.setState({
					hogs:
					this.state.hogs.filter((hog) => hog.greased === true)
				})
			}
		}
		)
	}


	sortByName = () => {
		this.setState({
		hogs: 
			this.state.hogs.sort((a, b) => {
			let nameA = a.name.toUpperCase();
			let nameB = b.name.toUpperCase();
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			})
		})
	}

	sortByWeight = () => {
		this.setState({
		hogs:
			this.state.hogs.sort((a, b) => {
				return a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
			})
			})
	}



  render() {
  	console.log(this.state.hogs)
    return (
      <div className="App">
          < Nav />
          < SortBy sortType={this.state.sortType} handleChange={this.handleChange} />
          < FilterBy handleClick={this.handleClick} greased={this.state.greased} />
          < HogsLister sortType={this.state.sortType} hogs={this.state.hogs} greased={this.state.greased} />
      </div>
    )
  }
}

export default App;
