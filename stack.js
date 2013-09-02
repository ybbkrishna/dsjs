/********************stack*******************/
var Stack = function() {
	var node = function() {
		var data;
		var next;
		node  = function(data) {
			this.data = data;
		};
		return {
			data : data,
			next : next
		};
	};
	var height=0,capacity=100000;
	var head=null;
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
		if(that.isFull()) {
			console.log("Stack overflow");
			return false;
		}
		if(that.head==null) {
			var temp =new node(data);
			that.head = temp;
			that.height ++;
			return;
		}
		var temp = that.head;
		var temp1 = new node(data);
		temp1.next = temp;
		that.head = temp1;
		that.height ++;
		return;
	};
	var pop = function() {
		var that =this;
		if(that.isEmpty()) {
			console.log("Stack Underflow");
			return null;
		}
		var temp = that.head;
		that.head = temp.next;
		that.height--;
		return temp.data;
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