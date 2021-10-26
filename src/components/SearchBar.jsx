import axios from 'axios';
import { useFormik } from 'formik';
import { Form, InputGroup, Button } from 'react-bootstrap';

const Search = ({ setSearchResult, setSearchError }) => {
	const formik = useFormik({
		initialValues: {
			search: '',
		},
		onSubmit: (value) => handleSearch(value.search),
	});

	const handleSearch = async (input) => {
		const trimmedInput = input.trim();
		const request = axios.get(
			`https://superheroapi.com/api/${import.meta.env.VITE_ACCESS_TOKEN}/search/${trimmedInput}`,
		);
		const response = await request;

		if (response.data.response === 'success') {
			setSearchError('');
			setSearchResult(response.data.results);
		} else if (response.data.response === 'error') {
			setSearchError(response.data.error);
			setSearchResult([]);
		}
	};

	return (
		<Form onSubmit={formik.handleSubmit}>
			<InputGroup className="my-3" size="sm">
				<Form.Control
					required
					id="search"
					minLength="3"
					name="search"
					placeholder="Enter hero name..."
					type="search"
					value={formik.values.search}
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
				/>
				<Button type="submit" variant="primary">
					Search
				</Button>
			</InputGroup>
		</Form>
	);
};

export default Search;
