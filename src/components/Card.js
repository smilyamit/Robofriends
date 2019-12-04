import React from 'react';


const Card = ({id, name, email}) => {              //receiving props and destructuring using {}
	return (
		<div className = 'tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>   
			<img alt = 'robots' src= {`https://www.robohash.org/${id}?200x200`}/>
				<div>
					<h1>{name}</h1>
					<p>{email}</p>
				</div>
		</div>

		);
}

export default Card;
//tc-text centered dib-display inline block br-border, pa-padding, ma-margin grow-name of animation, bw-border width