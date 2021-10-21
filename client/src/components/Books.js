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
			<h1 className="font-bold text-center text-4xl py-5">The Book Store</h1>
			<section className="grid grid-cols-2 gap-10 px-5">
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
						<article
							key={id}
							className="md:flex bg-gray-200 rounded-xl p-8 md:p-0"
						>
							<div className="lg:flex lg:items-center">
								<img
									className="rounded-t-lg h-60 w-full object-cover"
									src={thumbnail}
									alt={title}
								/>
							</div>

							<div className="pt-6 md:p-8 text-center md:text-left space-y-4">
								<h3 className="font-bold my-2 text-2xl">{title}</h3>
								<span className="font-bold">Author:</span> {authors}
								<p className="mb-4">Pages: {pageCount}</p>
								<p className="mb-4">{description.substring(0, 140)}</p>
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
