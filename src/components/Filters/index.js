import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import CustomInput from '../CustomInput';
import styles from './filters.module.css';

const filterValidation = Yup.object({
	search: Yup.string(),
	sorting: Yup.string().required('Sorting is required'),
	ordering: Yup.string(),
	language: Yup.string(),
});

function Filters({ handleFilter }) {
	return (
		<Formik
			initialValues={{
				search: '',
				sorting: 'stars',
				ordering: 'desc',
				language: '',
			}}
			validationSchema={filterValidation}
			validateOnChange
			onSubmit={handleFilter}>
			{({ values }) => (
				<Form className={styles.filter__form}>
					<CustomInput
						label='Search'
						labelstyles={styles.search__label}
						errorstyles={styles.error}
						name='search'
						inputstyles={styles.filter__field}
						placeholder='Name in:name,readme or user:username or stars:100'
					/>

					<CustomInput
						label='Sorting by'
						labelstyles={styles.sorting__label}
						errorstyles={styles.error}
						name='sorting'
						inputstyles={styles.filter__field}
						inputcomponent='select'>
						<option value='stars'>Stars</option>
						<option value='forks'>Forks</option>
					</CustomInput>

					<CustomInput
						label='Ordering by'
						labelstyles={styles.ordering__label}
						errorstyles={styles.error}
						name='ordering'
						inputstyles={styles.filter__field}
						inputcomponent='select'>
						<option value='desc'>Descending</option>
						<option value='asc'>Ascending</option>
					</CustomInput>

					<CustomInput
						label='Language '
						labelstyles={styles.language__label}
						errorstyles={styles.error}
						name='language'
						inputstyles={styles.filter__field}
						inputcomponent='select'>
						<option value=''>Any</option>
						<option value='javascript'>Javascript</option>
						<option value='python'>Python</option>
						<option value='java'>Java</option>
						<option value='c'>C</option>
					</CustomInput>

					<button className={styles.custom__btn} type='submit'>
						Filter
					</button>
				</Form>
			)}
		</Formik>
	);
}

export default Filters;
