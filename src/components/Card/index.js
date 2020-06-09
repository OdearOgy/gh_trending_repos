import React from 'react';
import styles from './card.module.css';

import { GoRepoForked, GoStar } from 'react-icons/go';

function Card({ r_url, r_stars, r_name, ...props }) {
	const { description, language, forks } = props;

	return (
		<div className={styles.card}>
			<div className={styles.text}>
				<h2 className={styles.title}>
					<a href={r_url} target='_blank' rel='noopener noreferrer'>
						{r_name}
					</a>
				</h2>

				<p className={styles.description}>{description}</p>
			</div>

			<div className={styles.details}>
				<span>{language}</span>
				<span>
					<GoStar />
					{r_stars}
				</span>
				<span>
					<GoRepoForked /> {forks}
				</span>
			</div>
		</div>
	);
}

export default Card;
