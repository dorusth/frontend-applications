(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),l=a.n(r),i=(a(15),a(6)),c=a.n(i),o=a(9),d=a(1),u=a(2),p=a(4),m=a(3),h=a(5),v=(a(17),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={liked:"far fa-heart",likedButton:"button-like"},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"createMarkup",value:function(){return{__html:this.props.name.description.value}}},{key:"like",value:function(){"far fa-heart"===this.state.liked?this.setState({liked:"fas fa-heart",likedButton:"button-like-active"}):this.setState({liked:"far fa-heart",likedButton:"button-like"})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"overviewItem"},s.a.createElement("a",{href:this.props.name.cho.value},s.a.createElement("h2",null,this.props.name.title.value)),s.a.createElement("img",{src:this.props.name.imageLink.value,alt:this.props.name.title.value}),s.a.createElement("div",{className:"overview_info"},s.a.createElement("p",null,this.props.name.placeName.value),s.a.createElement("p",{className:"overview_description",dangerouslySetInnerHTML:this.createMarkup()})),s.a.createElement("button",{className:this.state.likedButton,onClick:function(){e.props.updateSaved(e.props.name),e.like()}},s.a.createElement("i",{className:this.state.liked})))}}]),t}(s.a.Component)),f=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;if(!0===this.props.loading)return s.a.createElement("div",null,"Loading...");var t=this.props.data.map((function(t,a){return s.a.createElement(v,{updateSaved:e.props.updateSaved,key:a,name:t})}));return s.a.createElement("div",{className:"overview"},t)}}]),t}(s.a.Component),k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,place:"https://hdl.handle.net/20.500.11840/termmaster7745",currentSelected:"https://hdl.handle.net/20.500.11840/termmaster7745",places:[{name:"Indonesi\xeb",url:"https://hdl.handle.net/20.500.11840/termmaster7745"},{name:"Amerika",url:"https://hdl.handle.net/20.500.11840/termmaster6582"},{name:"Canada(British columbia)",url:"https://hdl.handle.net/20.500.11840/termmaster6784"},{name:"New britain",url:"https://hdl.handle.net/20.500.11840/termmaster6856"},{name:"saved",url:"saved"}],saved:[]},a.updateSaved=function(e){if(a.state.saved.includes(e)){var t=a.state.saved,n=t.indexOf(e);console.log(a.state.saved),n>-1&&(t.splice(n,1),a.setState({saved:t},console.log(a.state.saved)),localStorage.setItem("saved",JSON.stringify(t)))}else{var s=a.state.saved;s.push(e),a.setState({saved:s}),localStorage.setItem("saved",JSON.stringify(s))}},a.items=a.state.places.map((function(e,t){return e.url===a.state.currentSelected?s.a.createElement("li",{key:t,className:"selected",onClick:function(){a.updatePlace(e.url)}},e.name):s.a.createElement("li",{key:t,onClick:function(){a.updatePlace(e.url)}},e.name)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getData(),this.getSaved()}},{key:"getSaved",value:function(){localStorage.getItem("saved")&&this.setState({saved:JSON.parse(localStorage.getItem("saved"))})}},{key:"getData",value:function(){var e=Object(o.a)(c.a.mark((function e(){var t,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-35/sparql",t="\n\t\tPREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n\t\tPREFIX dc: <http://purl.org/dc/elements/1.1/>\n\t\tPREFIX dct: <http://purl.org/dc/terms/>\n\t\tPREFIX skos: <http://www.w3.org/2004/02/skos/core#>\n\t\tPREFIX edm: <http://www.europeana.eu/schemas/edm/>\n\t\tPREFIX foaf: <http://xmlns.com/foaf/0.1/>\n\t\tPREFIX hdlh: <https://hdl.handle.net/20.500.11840/termmaster>\n\t\tSELECT * WHERE {\n\t\t      <".concat(this.state.place,'> skos:narrower* ?place .\n\t\t      ?place skos:prefLabel ?placeName .\n\t\t VALUES ?type { "masker" "Masker" }\n\t\t     ?cho dct:spatial ?place ;\n\t\t       dc:type ?type ;\n\t\t       dc:title ?title ;\n\t\t       dc:description ?description ;\n\t\t         edm:isShownBy ?imageLink\n\t\t}\n\t\tGROUP BY ?place ?placeName\n\t\t'),e.next=4,fetch("https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-35/sparql?query="+encodeURIComponent(t)+"&format=json");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,this.setState({masks:n.results.bindings,loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updatePlace",value:function(e){var t=this;"saved"!==e?this.setState({place:e,currentSelected:e},(function(){t.getData()})):this.setState({masks:this.state.saved,loading:!1,currentSelected:"saved"})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",null,"Maskers van de wereld"),s.a.createElement("ul",null,this.items)),s.a.createElement(f,{updateSaved:this.updateSaved,loading:this.state.loading,data:this.state.masks,place:this.state.place}))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.f5d5fc2e.chunk.js.map