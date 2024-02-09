'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
	const [searchVal, setSearchVal] = useState('');
	const router = useRouter();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		router.push(`/search?query=${searchVal}`);
	};

	return (
		<form onSubmit={handleSubmit} className='relative flex justify-between w-full px-2'>
			<Input
				className='focus:placeholder-transparent h-14'
				type='text'
				placeholder={'Search for a recipe ...'}
				value={searchVal}
				onChange={(e) => setSearchVal(e.target.value)}
			/>
			<div className='absolute h-9 w-9 right-0 top-5'>
				<SearchIcon className='h-4 w-4 text-gray-500' />
			</div>
		</form>
	);
};
