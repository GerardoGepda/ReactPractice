import React from 'react';
import './Task.css';

class Task extends React.Component {
	render() {
		const {value} = this.props;
		return(
			<div className="red">
				{value.title} - {value.description} - {value.done} - {value.id}
                <input type="checkbox"/>
                <button>x</button>
			</div>
        );
	}
}

export default Task;