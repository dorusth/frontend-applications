import React from 'react';

class overviewItem extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			loading: true,
			liked: "far fa-heart"
		}
	}

	createMarkup() {
	  return {__html: this.props.name.description.value};
	}


	render(){
		return (<div className="overviewItem"><a href={this.props.name.cho.value}>
			<h2>{this.props.name.title.value}</h2></a>
			<img src={this.props.name.imageLink.value} alt={this.props.name.title.value}/>
			<div className="overview_info">
				<p>{this.props.name.placeName.value}</p>
				<p className="overview_description" dangerouslySetInnerHTML={this.createMarkup()} />
			</div>
			<button onClick={()=>{this.props.updateSaved(this.props.name); this.setState({liked:"fas fa-heart"})}}><i className={this.state.liked}></i></button>
		</div>)
	}

}

export default overviewItem
