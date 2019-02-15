import React from 'react';
import * as lexicon from '../common/i18n';

let HomePage = () => {
	return (
		<div className="home-panel">
			<h1>{lexicon.WELCOME_MESSAGE}</h1>
			<div>Simple app for react+redux testing</div>
		</div>
	);
}

export default HomePage;