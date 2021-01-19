import hydrate from 'preact-iso/hydrate';
import { LocationProvider, Router } from 'preact-iso/router';
import { ErrorBoundary } from 'preact-iso/lazy';
import NotFound from './pages/_404.js';
import NotesApp from './pages/app/index.jsx';

export function App() {
	return (
		<LocationProvider>
			<div class="app">
				<ErrorBoundary>
					<Router>
						<NotesApp path="/" />
						<NotFound default />
					</Router>
				</ErrorBoundary>
			</div>
		</LocationProvider>
	);
}

hydrate(<App />);

export async function prerender(data) {
	const { default: prerender } = await import('preact-iso/prerender');
	return await prerender(<App {...data} />);
}
