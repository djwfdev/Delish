'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export const Navbar = () => {
	return (
		<header className='top-0 z-40 w-full border-b bg-background py-1'>
			<div className='flex h-16 px-2 items-center justify-between'>
				<Link href='/' className='flex items-center'>
                    <span className='text-lg font-semibold text-primary'>Delicious.io</span>
					{/* <Avatar className='ring-2 dark:ring-[#faf0d6] ring-[#050f29] h-6'>
						<AvatarFallback className='dark:text-[#faf0d6] text-[#050f29] text-sm font-semibold transition-all'>
							
						</AvatarFallback>
					</Avatar> */}
				</Link>
				<div className='flex items-center'>
					<Link
						href='https://www.linkedin.com/in/dylanwf/'
						target='_blank'
						className={cn(
							buttonVariants({
								variant: 'ghost',
								size: 'icon',
							})
						)}
					>
						<p>test</p>
					</Link>
				</div>
			</div>
		</header>
	);
};
