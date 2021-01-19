import { createHotContext as $w_h$ } from '/_wmr.js';const $IMPORT_META_HOT$ = $w_h$(import.meta.url);import { html as $$html } from '/@npm/htm/preact';
import styles from './style.module.css.js';
import { useState } from '/@npm/preact/hooks';

export default function Home() {
	const [count, setCount] = useState(0);

	return (
		$$html`
			<section class=${styles.home}>
				<h1>Home</h1>
				<p>This is the home page.</p>
				
					<button style=${{ width: 30 }} onClick=${() => setCount(count - 1)}>
						-
					</button>
					<output style=${{ padding: 10 }}>Count: ${count}</output>
					<button style=${{ width: 30 }} onClick=${() => setCount(count + 1)}>
						+
					</button>
				
			</section>
		`
	);
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
