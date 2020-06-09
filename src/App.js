import React, { useEffect, useState } from 'react';

import { Card } from './components';

import styles from './App.module.css';

function App() {
	const [data, setData] = useState([]);
	const url = 'https://api.github.com/search/repositories?sort=stars&q=language';

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.items);
				setData(data.items);
			});
	}, [url]);

	return (
		<div className={styles.app}>
			<div className={styles.header}>Github Trending Repositories</div>

			<div className={styles.main}>
				<div className={styles.filters}>
					{/* the searchbar feature */}
					<h3>search</h3>
				</div>

				<div className={styles.content}>
					{data.map((repo) => (
						<Card
							key={repo.id}
							r_stars={repo.watchers_count}
							r_url={repo.html_url}
							r_name={repo.full_name}
							{...repo}
						/>
					))}
				</div>
			</div>

			<div className={styles.footer}>
				<span>
					by{' '}
					<a href='https://github.com/odearogy' target='_blank' rel='noopener noreferrer'>
						OdearOgy
					</a>
				</span>
			</div>
		</div>
	);
}

export default App;
