/********************stack*******************/
var Stack = function() {
	var height=0,head=null,capacity=100000;
	var isFull = function() {
		var that =this;
		console.log(that.height);
		return that.height===that.capacity;
	};
	var isEmpty = function() {
		var that =this;
		return that.height===0;
	};
	var push = function(data) {
		var that =this;
		if(isFull()) {
			console.log("Stack overflow");
			return false;
		}
		var temp = that.head;
		data.next = temp;
		that.head = data;
		that.height ++;
		return true;
	};
	var pop = function() {
		var that =this;
		if(isEmpty()) {
			console.log("Stack Underflow");
			return null;
		}
		var temp = that.head;
		that.head = temp.next;
		that.height--;
		return temp;
	};

	return {
		isFull: isFull,
		isEmpty: isEmpty,
		push: push,
		pop: pop,
		height: height
	};
};
/**************END*************/