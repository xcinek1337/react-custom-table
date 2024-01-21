import React from 'react';
import { PaginationContainer, PaginationSpan } from './Pagination.styled';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
	const prevPage = () => {
		if (currentPage > 1) {
			onPageChange(currentPage - 1);
		}
	};

	const nextPage = () => {
		if (currentPage < totalPages) {
			onPageChange(currentPage + 1);
		}
	};

	const renderPageNumbers = () => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<PaginationSpan
					key={i}
					onClick={() => onPageChange(i)}
				>
					{i}
				</PaginationSpan>
			);
		}
		return pageNumbers;
	};

	return (
		<>
			<PaginationContainer>
				<PaginationSpan onClick={prevPage}>{'<'}</PaginationSpan>
				{renderPageNumbers()}
				<PaginationSpan onClick={nextPage}>{'>'}</PaginationSpan>
			</PaginationContainer>
		</>
	);
};

export default Pagination