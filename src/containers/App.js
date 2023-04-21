import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBundary from "../components/ErrorBundary";
import './App.css';

import {setSearchField} from '../action';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        searchField : state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange : (event) => {dispatch(setSearchField(event.target.value))}
    }
}

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: []
            // searchfield: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ robots: users})});
    }

    // onSearchChange = (event) => {
    //     this.setState ({searchfield: event.target.value});
    // }

    render(){
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
        return  !robots.length ?
                <h1 className="f1">Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBundary>
                    </Scroll>
                </div>
            );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
