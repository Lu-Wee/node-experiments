
class fiboIterator {
	constructor() {
		this.pprev = undefined;
		this.prev = undefined;
		this.curr = undefined;
	}

	next() {
		this.curr = Number.isNaN(this.pprev + this.prev) 
			? 1
			: this.pprev + this.prev;
		this.pprev = this.prev;
		this.prev = this.curr;
		return {value: this.curr, done: false};
	}
}

class fibo {
	[Symbol.iterator]() {
		return new fiboIterator();
	}
}

let a = new fiboIterator();
a.next();

for (const n of new fibo()){
	if (n > 100000) break;
	console.log(n);
}
