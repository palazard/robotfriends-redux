import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBundary from "../components/ErrorBundary";
import './App.css';

import {requestRobotsAction, setSearchField} from '../action';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        searchField : state.searchRobots.searchField,
        robots : state.requestRobots.robots,
        isPending : state.requestRobots.isPending,
        error : state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange : (event) => {dispatch(setSearchField(event.target.value))},
        onRequestRobots : () => {dispatch(requestRobotsAction())}
    }
}

class App extends Component {
    //NOT NEEDED ANYMORE CAUSE COME FROM PROPS
    // constructor(){
    //     super();
    //     this.state = {
    //         robots: []
    //         // searchfield: ''
    //     };
    // }

    componentDidMount() {
        //NOT NEEDED ANYMORE CAUSE COME FROM PROPS
        // fetch('https://jsonplaceholder.typicode.com/users')
        //   .then(response=> response.json())
        //   .then(users => {this.setState({ robots: users})});
        this.props.onRequestRobots();
    }

    //NOT NEEDED ANYMORE CAUSE COME FROM PROPS
    // onSearchChange = (event) => {
    //     this.setState ({searchfield: event.target.value});
    // }

    render(){
        // const {robots} = this.state;
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
        return  isPending ?
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
