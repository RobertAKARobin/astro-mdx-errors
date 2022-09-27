export function throwError() {
	console.log(`I'm going to try to throw a custom error, but probably will just keep spinning until I run out of memory...`);

	throw new Error('Oh no');
}
