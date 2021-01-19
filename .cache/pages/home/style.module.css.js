import { style } from '/_wmr.js';
style("/../pages/home/style.module.css", "pages/home/style.module.css");
const styles = {home:'home_7pwwsk'};
export default styles;
export const home='home_7pwwsk';
import { createHotContext } from '/_wmr.js';
createHotContext(import.meta.url).accept(({ module: { default: s } }) => {
for (let i in s) styles[i] = s[i];
});
