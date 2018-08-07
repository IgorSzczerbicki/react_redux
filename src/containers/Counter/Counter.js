import React, { Component } from 'react';
import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

	render () {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
				<CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
				<CounterControl label="Add 9" clicked={this.props.onAddCounter}  />
				<CounterControl label="Subtract 9" clicked={this.props.onSubtractCounter}  />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		ctr: state.counter
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
		onAddCounter: () => dispatch({type: 'ADD', value: 9}),
		onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
		onSubtractCounter: () => dispatch({type: 'SUBTRACT', value: 9})
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);