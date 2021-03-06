import React, { Component } from 'react';
import marked from 'marked';
import autosize from 'autosize';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {inputText: ""};

		this.handleChange = this.handleChange.bind(this);

		marked.setOptions({
		  renderer: new marked.Renderer(),
		  gfm: true,
		  tables: true,
		  breaks: false,
		  pedantic: false,
		  sanitize: false,
		  smartLists: true,
		  smartypants: false
		});
	}

	handleChange(e){
		autosize(document.querySelector('textarea'));

		let result = marked(e.target.value);
		let formatted = {__html: result};
		let final = <div dangerouslySetInnerHTML={formatted} />

		this.setState({mkdwn: final});
	}

	render() {
	return (
	<div>
		<div className="App container">
			<section className="hero">
				<div className="hero-body">
					<div className="container">
					  <h1 className="title">
						07 - react markdown converter
					  </h1>
					  <h2 className="subtitle">
						preview markdown text
					  </h2>
					</div>
				</div>
			</section>

			<div className="columns main">
				{/*Left column*/}
				<div className="column">
					<div className="box" >
						<div className="textinput">
							<textarea className='textarea' rows='3' data-min-rows='3' onChange={this.handleChange.bind(this)}></textarea>
						</div>				
						<br/>		
						
					</div>
				</div>

				{/*Right column*/}
				<div className="column">
					<div className="box" >
						
						<div className="content">
							{this.state.mkdwn ? this.state.mkdwn : "Nothing to show! :("}
						</div>
					</div>
				</div>
			</div>		
		</div>

		<footer className="footer footbehave">
			  <div className="container">
			    <div className="content has-text-centered">
			      <p>
			        <strong>07 - react markdown converter</strong> by <a href="https://github.com/pgsil/miniminis">Pedro Gonçalves</a>.
		        	</p>
			      <p>
			        <a className="icon" href="https://github.com/pgsil/">
			          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="25" height="30" viewBox="0 0 100 100">
			              <g transform="translate(10,70) scale(0.05,-0.05)">
			                 <path d="M768 1408q209 0 385.5 -103t279.5 -279.5t103 -385.5q0 -251 -146.5 -451.5t-378.5 -277.5q-27 -5 -40 7t-13 30q0 3 0.5 76.5t0.5 134.5q0 97 -52 142q57 6 102.5 18t94 39t81 66.5t53 105t20.5 150.5q0 119 -79 206q37 91 -8 204q-28 9 -81 -11t-92 -44l-38 -24 q-93 26 -192 26t-192 -26q-16 11 -42.5 27t-83.5 38.5t-85 13.5q-45 -113 -8 -204q-79 -87 -79 -206q0 -85 20.5 -150t52.5 -105t80.5 -67t94 -39t102.5 -18q-39 -36 -49 -103q-21 -10 -45 -15t-57 -5t-65.5 21.5t-55.5 62.5q-19 32 -48.5 52t-49.5 24l-20 3q-21 0 -29 -4.5 t-5 -11.5t9 -14t13 -12l7 -5q22 -10 43.5 -38t31.5 -51l10 -23q13 -38 44 -61.5t67 -30t69.5 -7t55.5 3.5l23 4q0 -38 0.5 -88.5t0.5 -54.5q0 -18 -13 -30t-40 -7q-232 77 -378.5 277.5t-146.5 451.5q0 209 103 385.5t279.5 279.5t385.5 103zM291 305q3 7 -7 12 q-10 3 -13 -2q-3 -7 7 -12q9 -6 13 2zM322 271q7 5 -2 16q-10 9 -16 3q-7 -5 2 -16q10 -10 16 -3zM352 226q9 7 0 19q-8 13 -17 6q-9 -5 0 -18t17 -7zM394 184q8 8 -4 19q-12 12 -20 3q-9 -8 4 -19q12 -12 20 -3zM451 159q3 11 -13 16q-15 4 -19 -7t13 -15q15 -6 19 6z M514 154q0 13 -17 11q-16 0 -16 -11q0 -13 17 -11q16 0 16 11zM572 164q-2 11 -18 9q-16 -3 -14 -15t18 -8t14 14z" />
			              </g>
			          </svg>
			        </a>
			      </p>
			    </div>
			  </div>
			</footer>
	</div>);
  }
}

export default App;
