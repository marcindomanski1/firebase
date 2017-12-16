import React, {Component} from 'react';


class App extends Component {
    state = {
        response: "No response yet!"
    }

    getHandler = () => {
        fetch('https://ad-snadbox.firebaseio.com/users/marcin.json')
            .then(response => response.json())
            .then((json) => {
                this.setState({response: JSON.stringify(json)})
            })
    }

    postHandler = () => {
        fetch(
            'https://ad-snadbox.firebaseio.com/users/marcin.json',
            {
                method: 'POST',
                body: JSON.stringify({
                    name: 'Marcin',
                    lastname: 'Domanski',
                    active: false
                })
            }
        )
    }

    putHandler = () => {
        fetch(
            'https://ad-snadbox.firebaseio.com/users/marcin.json',
            {
                method: 'PUT',
                body: JSON.stringify({
                    name: 'Marcin',
                    lastname: 'Domanski',
                    active: false
                })
            }
        )
    }

    patchHandler = () => {
        fetch(
            'https://ad-snadbox.firebaseio.com/users/marcin.json',
            {
                method: 'PATCH',
                body: JSON.stringify({
                    name: 'Marcin',
                    lastname: 'Domanski',
                    active: true
                })
            }
        )
    }

    deleteHandler = () => {
        fetch(
            'https://ad-snadbox.firebaseio.com/users/marcin.json',
            {
                method: 'DELETE'
                })
            }


    render() {
        return (
            <div>
                <button onClick={this.getHandler}>GET data from our endpoint.</button>
                <button onClick={this.postHandler}>POST data to our endpoint.</button>
                <button onClick={this.putHandler}>PUT data to our endpoint.</button>
                <button onClick={this.patchHandler}>PATCH data in our endpoint.</button>
                <button onClick={this.deleteHandler}>DELETE data from our endpoint.</button>
                <p>
                    {this.state.response}
                </p>
            </div>
        );
    }
}

export default App;
