
class fiboIterator {
	constructor() {
		this.pprev = undefined;
		this.prev = undefined;
		this.curr = undefined;
	}

//	1- pp: undefined p: undefined => 1
//	1 - pp: undefined, p: 1 ==> 1
//	2- pp:1, p:1 ==> 1
//	3- p:undefined, v:0 ==> 1
//	5- p:undefined, v:0 ==> 1 
//	8
//	13
//	21

	next(){
		this.curr = (this.pprev + this.prev) ?? 1
		this.pprev = this.prev;
		this.prev = this.curr;
		return this.curr;
	}
}

