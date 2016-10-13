import JqueryPlugin from "./pattern/JqueryPlugin";
import { Mod1 } from "./demo/demo.mod1";

export default class Demo2 extends JqueryPlugin {
	constructor () {
		super();
		console.log('Demo2');

		let mod1 = new Mod1();
		mod1.test();
	}
}
