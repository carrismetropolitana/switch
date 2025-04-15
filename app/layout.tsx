/* * */

import { type PropsWithChildren } from 'react';

import './styles.css';

/* * */

export const metadata = {
	title: 'CMetropolitana | Switch',
};

/* * */

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html suppressHydrationWarning>
			<body>
				{children}
			</body>
		</html>
	);
}
