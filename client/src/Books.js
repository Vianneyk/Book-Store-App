import React, { useState, useEffect } from "react";
import axios from "axios";

const Books = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const fetchBooks = async () => {
			const res = await axios.get(
				"https://www.googleapis.com/books/v1/volumes?q=HTML5"
			);

			console.log(res.data.items);
		};

		fetchBooks();
	}, []);

	return;
};

export default Books;
