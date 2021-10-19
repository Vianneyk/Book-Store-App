import React, { useState, useEffect } from "react";
import axios from "axios";

const Books = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const fetchBooks = async () => {
			const res = await axios.get(
				"https://www.googleapis.com/books/v1/volumes?q=HTML5"
			);
			setBooks(res.data.items);
			console.log(res.data.items);
		};

		fetchBooks();
	}, []);

	return (
		<>
			<h1>The Book Store</h1>
			<section>
				{books.map(book => {
					const {
						id,
						volumeInfo: {
							description,
							authors,
							imageLinks: { thumbnail },
							pageCount,
							title,
						},
					} = book;

					return (
						<article key={id}>
							<div>
								<img src={thumbnail} alt={title} />
							</div>

							<div>
								<h3>{title}</h3>
								<span>Author:</span> {authors}
								<p>Pages: {pageCount}</p>
								<p>{description.substring(0, 140)}</p>
							</div>
						</article>
					);
				})}
				;
			</section>
		</>
	);
};

export default Books;
