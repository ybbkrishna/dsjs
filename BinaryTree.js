var BinaryTree = function() {
	var head=null,traverseInO= new Array(),count=0,index=1,width=0;
	var BinaryTreeNode = function(data) {
		var left=null,right=null,data=data;
		return {
			left : left,
			right : right,
			data : data
		};
	};
	var constructLevelOrder = function(data) {
		var that = this;
		var temp = new BinaryTreeNode(data);
		if(that.head==null) {
			that.head = temp;
			return;
		}
		var temp1 = that.traverseToIncomplete();
		temp1.left==null ? temp1.left=temp : temp1.right = temp;
		return; 
	};

	var constructZigZag = function(data) {
		var that = this;
		var temp = new BinaryTreeNode(data);
		if(that.head==null) {
			that.head = temp;
			that.count++;
			return;
		}
		if(Math.floor(Math.log(that.count+1)/Math.log(2))%2==0) {
			var temp1 = that.traverseToIncomplete();
			temp1.left==null ? temp1.left=temp : temp1.right = temp;
		}
		else {
			var temp1 = that.traverseToIncompleteRight();
			temp1.right==null ? temp1.right = temp : temp1.left =temp;
		}
		that.count++;
		return;
	};

	var traverseToIncomplete = function() {
		var that = this;
		if(that.head==null)
			return null;
		var que = new Queue();
		que.enQueue(that.head);
		while(!que.isEmpty()) {
			var temp = que.deQueue();
			if(temp.left==null||temp.right==null) {
				return temp;
			}
			else {
				que.enQueue(temp.left);
				que.enQueue(temp.right);
			}
		}
	};

	var traverseToIncompleteRight = function() {
		var that =this;
		if(that.head==null)
			return null;
		var que = new Queue();
		que.enQueue(that.head);
		while(!que.isEmpty()) {
			var temp = que.deQueue();
			if(temp.left==null||temp.right==null) {
				return temp;
			}
			else {
				que.enQueue(temp.right);
				que.enQueue(temp.left);
			}
		}
	};

	var traverseInOrder = function(root) {
		var that = this;
		if(root==null)
			return;
		that.traverseInOrder(root.left);
		that.traverseInO.push(root.data);
		that.traverseInOrder(root.right);
	};

	var join = function(a,b) {
		a.right = b;
		b.left = a;
	};

	var append = function(a,b) {
		if(a==null) return b ;
		if(b==null) return a;
		var x = a.left;
		var y = b.left;
		join(x,b);
		join(y,a);
		return a;
	};

	var BinaryTreeToDLL = function(root) {
		if(root==null)
			return null;
		var temp = BinaryTreeToDLL(root.left);
		var temp1 = BinaryTreeToDLL(root.right);
		root.left =root;
		root.right =root;
		temp = append(temp,root);
		return append(temp,temp1);
	};

	var traverseDLLtoList = function(root) {
		var that =this;
		var temp =root;
		while(temp.right!=root) {
			that.traverseInO.push(temp.data);
			temp =temp.right;
		}
		that.traverseInO.push(temp.data);
	};

	var isBST = function(root) {
		if(root==null)
			return true;
		if((root.left!=null&&root.data<findMax(root.left))||(root.right!=null&&root.data>findMin(root.right)))
			return false;
		if(!isBST(root.left)||!isBST(root.right))
			return false;
		return true;
	};

	var findMax = function(root) {
		var que = new Queue();
		var temp =root;
		que.enQueue(root);
		while(!que.isEmpty()) {
			var temp1 = que.deQueue();
			if(temp1.data>temp.data) {
				temp = temp1;
			}
			que.enQueue(root.left);
			que.enQueue(root.right);
		}
		return temp;
	};

	var LCA = function(root,node1,node2) {
		if(root==null) {
			return null;
		}
		if(root.data==node1||root.data==node2)
			return root;
		var left = LCA(root.left,node1,node2);
		var right = LCA(root.right,node1,node2);
		if(left==null&&right==null)
			return null;
		if(left==null)
			return right;
		if(right==null)
			return left;
		return root;
	};

	var findMin = function(root) {
		var que = new Queue();
		var temp =root;
		que.enQueue(root);
		while(!que.isEmpty()) {
			var temp1 = que.deQueue();
			if(temp1.data<temp.data) {
				temp = temp1;
			}
			que.enQueue(root.left);
			que.enQueue(root.right);
		}
		return temp;
	};

	var widthCal =function(root) {
		if(root==null)
			return 0;
		var left = widthCal(root.left);
		var right = widthCal(root.right);
		return left+right+1;
	}

	return {
		BinaryTreeNode : BinaryTreeNode,
		constructLevelOrder : constructLevelOrder,
		traverseToIncomplete : traverseToIncomplete,
		traverseToIncompleteRight : traverseToIncompleteRight,
		traverseInOrder : traverseInOrder,
		traverseInO : traverseInO,
		constructZigZag : constructZigZag,
		head : head,
		count : count,
		BinaryTreeToDLL : BinaryTreeToDLL,
		traverseDLLtoList : traverseDLLtoList,
		LCA : LCA
	};
};
var a = [1,3,2,4,5,6,7,15,14,13,12,11,10,9,8,16,17,18];
	var abc = new BinaryTree();
	for(var i=0;i<a.length;i++) {
		abc.constructZigZag(a[i]);
	}
	abc.LCA(abc.head,12,15);
	