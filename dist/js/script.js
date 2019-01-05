class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '', submitted: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    buildResponse(value){
        let suffixes = [
            "Sad!",
            "Smocking hot.",
            "Covfefe!"
        ];

        return `${value} is all the Democrats' fault! ${suffixes[Math.floor(Math.random() * suffixes.length)]}`;
    }

    handleSubmit(event) {
        this.setState({submitted: true});
        event.preventDefault();
    }

    render() {
        if(this.state.submitted){
            return <h1>{this.buildResponse(this.state.value)}</h1>
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                <label>
                What's the Democrats' fault?
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
                </form>
        );
        }
    }
}

ReactDOM.render(
<div>
<h1>It's all the Democrats' fault!</h1>
<NameForm />
</div>,
document.getElementById('root')
);