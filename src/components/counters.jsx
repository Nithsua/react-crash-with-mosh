import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <React.Fragment>
        <div>
          <button onClick={onReset} className="btn btn-primary btn-sm m-2">
            Reset
          </button>
          <ul>
            {counters.map((counter) => (
              <Counter
                key={counter.id}
                counter={counter}
                onIncrement={onIncrement}
                onDelete={onDelete}
              />
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
