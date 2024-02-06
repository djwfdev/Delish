import axios from 'axios';

const getData = async () => {
    // Fetching the msg from the API
    try {
        const response = await axios.get('http://localhost:9000');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default async function Home() {
	const message = await getData();

	return (
		<div>
			<h1>{message}</h1>
		</div>
	);
}
