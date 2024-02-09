import { NextResponse, type NextRequest } from 'next/server';

export const middleware = async (request: NextRequest) => {
	return NextResponse.next({
		request: {
			headers: new Headers({ 'x-url': request.url }),
		},
	});
}
