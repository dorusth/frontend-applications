import React from 'react';

class overviewItem extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			liked: "far fa-heart",
			likedButton: "button-like"
		}
	}

	createMarkup() {
	  return {__html: this.props.name.description.value};
	}

	like(){
		if(this.state.liked==="far fa-heart"){
			this.setState({
				liked:"fas fa-heart",
				likedButton:"button-like-active"
			})
		}else {
			this.setState({
				liked: "far fa-heart",
				likedButton: "button-like"
			})
		}
	}

	render(){
		return (<div className="overviewItem"><a href={this.props.name.cho.value}>
			<h2>{this.props.name.title.value}</h2></a>
			<img src={this.props.name.imageLink.value} alt={this.props.name.title.value}/>
			<div className="overview_info">
				<p>{this.props.name.placeName.value}</p>
				<p className="overview_description" dangerouslySetInnerHTML={this.createMarkup()} />
			</div>
			<button className={this.state.likedButton} onClick={()=>{this.props.updateSaved(this.props.name); this.like()}}><i className={this.state.liked}></i></button>
		</div>)
	}

}

export default overviewItem
