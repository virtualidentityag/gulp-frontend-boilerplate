import { Mod } from "./Mod";

export class Base {
	constructor () {
		console.log('Base');

		let mod = new Mod();
		mod.test();
	}

	public test() {
		console.log('Test');
	}
}
