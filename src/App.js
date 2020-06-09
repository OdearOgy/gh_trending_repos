import React, { useEffect, useState } from 'react';

import { Card, Filters } from './components';

import styles from './App.module.css';

function App() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState('?sort=stars&order=desc&q=language');
	const url = 'https://api.github.com/search/repositories';

	useEffect(() => {
		fetch(`${url}${query}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data.items);
			});
	}, [url, query]);

	const handleFilter = (filters) => {
		const { sorting, ordering, language } = filters;

		let query = '';

		if (language !== '') {
			query = `?sort=${sorting}&order=${ordering}&q=language:${language}`;
		} else {
			query = `?sort=${sorting}&order=${ordering}&q=language`;
		}

		setQuery(`${query}`);
	};

	return (
		<div className={styles.app}>
			<div className={styles.header}>Github Trending Repositories</div>

			<div className={styles.main}>
				<div className={styles.filters}>
					<h3 className={styles.title}>Filters</h3>
					<Filters handleFilter={handleFilter} />
				</div>

				<div className={styles.content}>
					<h3 className={styles.title}>Repositories</h3>
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
