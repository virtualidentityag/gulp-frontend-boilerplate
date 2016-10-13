import JqueryPlugin from "../pattern/JqueryPlugin";

export class Mod1 extends JqueryPlugin {
	constructor () {
		super();
		console.log('Mod1');
	}

	init(): void {
	}

	public test() {
		console.log('Test Mod1');
	}
}
