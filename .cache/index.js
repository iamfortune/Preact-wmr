import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';
import hydrate from '/@npm/preact-iso/hydrate';
import { LocationProvider, Router } from '/@npm/preact-iso/router';
import { ErrorBoundary } from '/@npm/preact-iso/lazy';
import NotFound from './pages/_404.js';
import NotesApp from './pages/app/index.jsx';

export function App() {
	return (
		$$html`<${LocationProvider}>
			<div class="app">
				<${ErrorBoundary}>
					<${Router}>
						<${NotesApp} path="/" />
						<${NotFound} default />
					<//>
				<//>
			</div>
		<//>`
	);
}

hydrate($$html`<${App} />`);

export async function prerender(data) {
	const { default: prerender } = await import('/@npm/preact-iso/prerender');
	return await prerender($$html`<${App} ...${data} />`);
}


import '/@npm/@prefresh/core';
if ($IMPORT_META_HOT$) {
  let a=0, m=import(import.meta.url);
  $IMPORT_META_HOT$.accept(async ({module}) => {
    m = await m;
    try {
      if (!a++) for (let i in module) self.__PREFRESH__.replaceComponent(m[i], module[i]);
    } catch (e) {
      $IMPORT_META_HOT$.invalidate();
      throw e;
    }
  });
}
