import React from 'react';
import OverviewItem from './overviewItem.js'

class Overview extends React.Component {

	render(){
		if(this.props.loading === true){
			return <div>Loading...</div>
		}else{
			let items = this.props.data.map(
				(item, i) => (
					<OverviewItem updateSaved={this.props.updateSaved} key={i} name={item}/>
			))
			return(
				<div className="overview">{items}</div>
			)
		}
	}
}

export default Overview
