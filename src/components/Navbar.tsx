'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export const Navbar = () => {
	return (
		<header className='top-0 z-40 w-full border-b bg-background pb-2'>
			<div className='flex h-16 px-2 items-center justify-between'>
				<Link href='/'>
                    <span className='text-3xl font-ex text-primary title'>Delish</span>
				</Link>
				<div className='flex items-center'>
					<Link
						href='/favourites'
						target='_blank'
						className={cn(
							buttonVariants({
								variant: 'outline',
							}),
                            'w-full ring-2 hover:ring-2 hover:bg-green-100 hover:scale-105 active:scale-95 ring-primary transition-transform'
						)}
					>
						<p>Favourites</p>
					</Link>
				</div>
			</div>
		</header>
	);
};
