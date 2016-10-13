import JqueryPlugin from "./pattern/JqueryPlugin";
import { Mod1 } from "./demo/demo.mod1";
import Mod2 from "./demo/demo.mod2";


export default class Demo extends JqueryPlugin {
	constructor () {
		super();
		console.log('Demo');

		let mod1 = new Mod1();
		mod1.test();

		let mod2 = new Mod2();
		mod2.test();
	}
}
