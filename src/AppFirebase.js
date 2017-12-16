import React, {Component} from 'react';
import {database} from './firebase';

class AppFirebase extends Component {
    state = {
        counter: null
    }

    incHandler = () => {
        database.ref('/counter')
    .set(this.state.counter + 1)
    }

    componentDidMount() {
        database.ref('/counter')
            .on('value', (snapshot) => {
                this.setState({
                    counter: snapshot.val()
                })
            })
    }

    render() {
        return (
        <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.incHandler}> + </button>
        </div>
        )}

}

export default AppFirebase;