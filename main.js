console.log(self);

self.onmessage = e => {
	console.log(e);
}

self.postMessage("Hello");

