import React from 'react';

// NOTE: In a real application we'd probably wanna move these
// definition to another file
const appState = {
    AWAITING_FIRST_INPUT:  1,
    AWAITING_SECOND_INPUT: 2
};

function reverseString(str) {
    return str.split("").reverse().join("");
};

class ReverseTest extends React.Component {
    constructor(props) {
        super(props);

        this.onValueChange = this.onValueChange.bind(this);
        this.onValueSubmit = this.onValueSubmit.bind(this);
        this.checkResult = this.checkResult.bind(this);
        this.state = {
            inputString: '',
            reversedString: '',
            currState: appState.AWAITING_FIRST_INPUT
        }
    }

    onValueChange(e) {
        // Technically a number can start with a decimal, but just a decimal
        // returns as NaN
        if (e.target.value === '.' || !isNaN(e.target.value)) {
            this.setState({ inputString: e.target.value });
        }
    }

    onValueSubmit(e) {
        // Possible values of ofValueChange which aren't really numbers
        if (this.state.inputString === '' || this.state.inputString === '.') {
            alert('Please enter a real number');
        } else {
            this.setState( {reversedString: reverseString(this.state.inputString),
                            inputString: '',
                            currState: appState.AWAITING_SECOND_INPUT});
        }
    }

    checkResult() {
        if (this.state.inputString.length !== this.state.reversedString.length) {
            return("???");
        } else {
            return (this.state.inputString === this.state.reversedString ? 'Correct!' : 'Incorrect, try again!');
        }
    }

    render() {
        // This is a little clunky, could likely be abstracted out
        switch(this.state.currState) {
            case appState.AWAITING_FIRST_INPUT:
                return(
                    <div>
                        <h2>Enter Any Number</h2>
                        <form onSubmit={this.onValueSubmit}>
                            <label>
                                Input Number:
                                <input type="text" value={this.state.inputString} onChange={this.onValueChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                );
            case appState.AWAITING_SECOND_INPUT:
                return(
                    <div>
                        <h2>Now enter the same number in reverse</h2>
                        <h3>Result: {this.checkResult()}</h3>
                        <form>
                            <label>
                                Input Number:
                                <input type="text" value={this.state.inputString} onChange={this.onValueChange} />
                            </label>
                        </form>
                    </div>
                );
            default:
                return(
                    <div>
                        <h2>Error!</h2>
                    </div>
                );
        }
    }
};

export default ReverseTest;
