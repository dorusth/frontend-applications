import React from 'react';
import './App.css';
import Overview from './components/overview.js'

class App extends React.Component {
	state = {
		loading:true,
		place:"https://hdl.handle.net/20.500.11840/termmaster7745",
		currentSelected:"https://hdl.handle.net/20.500.11840/termmaster7745",
		places: [
			{
				name:"Indonesië",
				url:"https://hdl.handle.net/20.500.11840/termmaster7745"
			},
			{
				name:"Amerika",
				url:"https://hdl.handle.net/20.500.11840/termmaster6582"
			},
			{
				name:"Canada(British columbia)",
				url:"https://hdl.handle.net/20.500.11840/termmaster6784"
			},
			{
				name:"New britain",
				url:"https://hdl.handle.net/20.500.11840/termmaster6856"
			},
			{
				name:"saved",
				url:"saved"
			}
		],
		saved:[]
	}

	componentDidMount(){
		this.getData()
		this.getSaved()
	}

	getSaved(){
		if(localStorage.getItem('saved')){
			this.setState({saved: JSON.parse(localStorage.getItem('saved'))})
		}
	}

	updateSaved = (item)=>{
		if(this.state.saved.includes(item)){
			let list = this.state.saved
			let index = list.indexOf(item)
			console.log(this.state.saved);
			if (index > -1) {
			  list.splice(index, 1);
			  this.setState({saved:list}, console.log(this.state.saved))
			  localStorage.setItem('saved', JSON.stringify(list))
			}
		}else{
			let current = this.state.saved
			current.push(item)
			this.setState({saved: current})
			localStorage.setItem('saved', JSON.stringify(current))
		}
	}

	//Data request
	async getData(){
		const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-35/sparql"
		const query = `
		PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
		PREFIX dc: <http://purl.org/dc/elements/1.1/>
		PREFIX dct: <http://purl.org/dc/terms/>
		PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
		PREFIX edm: <http://www.europeana.eu/schemas/edm/>
		PREFIX foaf: <http://xmlns.com/foaf/0.1/>
		PREFIX hdlh: <https://hdl.handle.net/20.500.11840/termmaster>
		SELECT * WHERE {
		      <${this.state.place}> skos:narrower* ?place .
		      ?place skos:prefLabel ?placeName .
		 VALUES ?type { "masker" "Masker" }
		     ?cho dct:spatial ?place ;
		       dc:type ?type ;
		       dc:title ?title ;
		       dc:description ?description ;
		         edm:isShownBy ?imageLink
		}
		GROUP BY ?place ?placeName
		`
		let response = await fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
		const data = await response.json();
		this.setState({
			masks:data.results.bindings,
			loading: false
		})
	}

	//change current url state based on nav input
	updatePlace(url){
		if(url!=="saved"){
			this.setState({place:url, currentSelected:url}, ()=>{this.getData()})
		}else{
			this.setState({
				masks:this.state.saved,
				loading: false,
				currentSelected:"saved"
			})
		}
	}

	//map nav items based on places object
	items = this.state.places.map(
		(place, i) => {
			if(place.url=== this.state.currentSelected){
				return <li key={i} className="selected" onClick={()=>{this.updatePlace(place.url)}}>{place.name}</li>
			}else{
				return <li key={i} onClick={()=>{this.updatePlace(place.url)}}>{place.name}</li>
			}
	})


	render(){
	  return (
	    <div className="App">
	      <header className="App-header">
	        <h1>Maskers van de wereld</h1>
			<ul>
				{this.items}
			</ul>
	      </header>
		  <Overview updateSaved={this.updateSaved} loading={this.state.loading} data={this.state.masks} place={this.state.place}/>
	    </div>
	  );
	}
}

export default App;
