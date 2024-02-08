'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

export const SearchBar = () => {
	const [searchVal, setSearchVal] = useState('');

	return (
		<div className='relative flex justify-between w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl'>
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
		</div>
	);
};
