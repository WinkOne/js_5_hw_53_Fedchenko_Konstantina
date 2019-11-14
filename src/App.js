import React, {Component} from 'react';
import nanoid from 'nanoid';
import './App.css';
import Message from "./Components/Program/Message";
import MainContant from "./Components/Contants/MainContant";

class App extends Component {

    state = {
        textIndex: '',
        messages: [
            {text:'one message',id:nanoid()},
            {text:'two message',id:nanoid()},
            {text:'three message',id:nanoid()},
        ],
    };
    changeMessage = event => {
        this.setState({textIndex: event.target.value} );
    };
    addMessage = () => {
        const messages = [...this.state.messages];
        messages.push({text: this.state.textIndex, id: nanoid()});
        this.setState({messages});
    };
    removeMessage = id => {
        const index = this.state.messages.findIndex(p => p.id === id);
        const messages = [...this.state.messages];
        messages.splice(index, 1);
        this.setState({messages});
    };
    render() {
        return (
            <div className="App">
                <MainContant change={this.changeMessage} click={this.addMessage}/>
                {this.state.messages.map(mess=>(
                    <Message
                        text={mess.text}
                        key={mess.id}
                        remove={() => this.removeMessage(mess.id)}
                    />
                ))}
            </div>
        );
    }
}


export default App;
