import { style } from '/_wmr.js';
style("/../pages/about/style.module.css", "pages/about/style.module.css");
const styles = {about:'about_migxty'};
export default styles;
export const about='about_migxty';
import { createHotContext } from '/_wmr.js';
createHotContext(import.meta.url).accept(({ module: { default: s } }) => {
for (let i in s) styles[i] = s[i];
});
