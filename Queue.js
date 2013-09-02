var Queue = function() {
	var node = function(data) {
		var data = data;
		var next=null;
		return {
			data : data,
			next : next
		};
	};
	var head=null,capacity=100000,length=0,next=null;
	var isEmpty = function() {
		var that = this;
		if(that.length==0)
			return true;
		return false;
	};
	var isFull = function() {
		var that = this;
		if(that.length == that.capacity)
			return true;
		return false;
	};
	var enQueue = function(data) {
		var that = this;
		if(that.isFull()) {
			console.log("Queue OverFlow");
			return false;
		}
		if(that.head==null) {
			var temp = new node(data);
			that.head = temp;
			that.length ++;
			return;
		}
		var temp = new node(data);
		var temp1 =that.head;
		while(temp1.next!=null) {
			temp1 = temp1.next;
		}
		temp1.next = temp;
		that.length++;
		return;
	};
	var deQueue = function() {
		var that = this;
		if(that.isEmpty()) {
			console.log("Queue UnderFlow");
			return null;
		}
		var temp = that.head;
		that.head = temp.next;
		that.length--;
		return temp.data;
	};
	return {
		isEmpty : isEmpty,
		isFull : isFull,
		enQueue : enQueue,
		deQueue : deQueue,
		length : length
	};
};