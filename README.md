# Maskers van de Wereld

Dit is een React web-app die maskers uit verschillende delen van de wereld laat zien uit de collectie van het Nationaal Museum van Wereldculturen.

![app](./app.png)

## Concept
Over tijd hebben verschillende plaatsen en verschillende culturen maskers een rol gespeeld.
Doormiddel van deze app krijg je een kijkje van de maskers die in de collectie zitten uit verschillende gebieden rond de wereld.

## Features
- sparql als databron
- overzicht van maskers per gebied uit de collectie
- een collectie van favoriete maskers samenstellen
- collectie wordt lokaal opgeslagen

## data
Het grootste struikelblok bij het maken van deze app was het ophalen van data.
Doordat ik nog geen ervaring had met het gebruiken van Sparql was dit een grote learningcurve, maar het is uiteindelijk gelukt om de data dynamisch op te vragen op basis van gebruikers input
```
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
```
hierbij is "{this.state.place}" een variabele link gebasseerd op de door de gebruiker gekozen locatie.


## to-do
- [X] Data opvragen via de NMVW databank
- [X] Collectie weergeven
- [X] Collectie filteren op basis van locatie
- [X] Opslaan/verwijderen van favorieten
- [X] state change interacties tussen components
- [ ] User feedback


## Installation
Dit project is gebouwd met create-react-app en sparql
Clone de repo:
```bash
$ git clone https://github.com/dorusth/frontend-applications.git
```
start de app met:
```bash
$ cd frontend-applications
$ npm install
$ npm run start
```
En ga naar "http://localhost:3000/"



[MIT](LICENCE) © [Dorus ten Haaf](https://dorustenhaaf.com)
