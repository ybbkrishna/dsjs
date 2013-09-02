var attribs = function() {
	var name;
	var value;
	setter = function(name,value) {
		this.name = name;
		this.value = value;
	};
	return {
		name : name,
		value : value,
		setter : setter
	};
};
var xmlTree = function(root) {
	var name =root;
	var childs = new Array();
	var attribs = new Array();
	var construct = function(data) {
		var that = this;
		if(data instanceof xmlTree) {
			that.childs.push(data);
		}
		else if(data instanceof attribs) {
			that.attribs.push(data);
		}
		else {
			console.log("not a valid data type for insertion into tree");
		}
	};
	var traverse = function(root) {
		var stack = new Stack();
		var list = new Array();
		stack.push(root);
		while(stack.height>0) {
			var now = stack.pop();
			list.push(now);
			for(var i=0;i<now.childs.length;i++) {
				stack.push(now.childs[i]);
			}
		}
		return list;
	};
	var searchByTag = function(root,node,attrib) {
		var stack = new Stack();
		var list = new Array();
		stack.push(root);
		while(stack.height>0) {
			var now = stack.pop();			
			if(node.attrib == now.attrib) {
				list.push(now);
			}
			for(var i=now.childs.length-1;i>=0;i--) {
				stack.push(now.childs[i]);
			}
		}
		return list;
	};

	return {
		name: name,
		childs : childs,
		attribs : attribs,
		construct : construct,
		traverse : traverse,
		searchByTag : searchByTag
	};
};