import JqueryPlugin from "../pattern/JqueryPlugin";

export default class Mod2 extends JqueryPlugin {
	constructor () {
		super();
		console.log('Mod2');
	}

	init(): void {
	}

	public test() {
		console.log('Test Mod2');
	}
}
