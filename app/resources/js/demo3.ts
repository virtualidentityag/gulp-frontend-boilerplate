import mod = require("./demo/demo.mod1");

let mod1 = new mod.Mod1();
mod1.test();

require.ensure(["./demo/demo.mod2"], function(require) {
	var c:any = require('./demo/demo.mod2');
	console.log(c);

	let mod2 = new c.Mod2();
	mod2.test();
});
