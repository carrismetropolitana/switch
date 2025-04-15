'use client';

/* * */

import { Loader } from '@/components/Loader';
import { LINK_RULES } from '@/LINK_RULES.js';
import { useEffect, useMemo } from 'react';

/* * */

function matchPath(pathTemplate: string, actualPath: string): null | Record<string, string> {
	// Split the template and actual paths by slashes
	const templateSegments = pathTemplate.split('/').filter(Boolean);
	const pathSegments = actualPath.split('/').filter(Boolean);
	// Exit early if the number of segments doesn't match
	if (templateSegments.length !== pathSegments.length) return null;
	// Set up a map to hold the parameters
	const params: Record<string, string> = {};
	// Iterate over the segments and check for matches
	for (let i = 0; i < templateSegments.length; i++) {
		// Get the template and actual segments
		const t = templateSegments[i];
		const a = pathSegments[i];
		// If the template segment starts with a colon, it's a parameter
		if (t.startsWith(':')) params[t.slice(1)] = a;
		// otherwise, check for a direct match
		else if (t !== a) return null;
	}
	// Return the params object
	return params;
}

function replaceParams(template: string, params: Record<string, string>) {
	// Replace the parameters in the template with the actual values
	// using a regex to match the pattern :paramName
	return template.replace(/:([a-zA-Z0-9_]+)/g, (_, key) => params[key] || '');
}

/* * */

export default function Page() {
	//

	const isDebug = useMemo(() => {
		// Exit early if not in a browser environment
		if (typeof window === 'undefined') return false;
		// Get the URL parameters to check for debug mode
		const params = new URLSearchParams(window.location.search);
		// Return true if debug mode is enabled
		return params.get('debug') === 'true' || params.get('debug') === '1';
	}, []);

	const redirectUrl = useMemo(() => {
		// Exit early if not in a browser environment
		if (typeof window === 'undefined') return;
		// Get the current window path
		const currentWindowPath = window.location.pathname;
		// Iterate over the links and check for matches
		for (const linkRule of LINK_RULES) {
			// Check if the link path matches the current window path
			const match = matchPath(linkRule.path, currentWindowPath);
			// If a match is found, replace the parameters in the destination URL
			// and redirect to the final URL.
			if (match) return replaceParams(linkRule.destination, match);
		}
		// If no match is found transparently redirect to the canonical URL
		return 'https://www.carrismetropolitana.pt' + currentWindowPath;
		//
	}, []);

	useEffect(() => {
		// Exit early if not in a browser environment
		if (typeof window === 'undefined') return;
		// Exit early if no redirect data is found
		if (!redirectUrl || isDebug) return;
		// Log the match and final URL for audit purposes
		/* AMPLITUDE.LOG('link_redirect') */
		// Redirect to the destination URL
		window.location.href = redirectUrl;
		//
	}, [redirectUrl]);

	return (
		<>
			<Loader size="lg" />
			{isDebug && <p>{redirectUrl}</p>}
		</>
	);

	//
}
