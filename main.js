function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

// BREATH FIRST TRAVERAL
// INSERT
BST.prototype.insert = function(value) {

  if (value <= this.value){
    // There is is no left child
    if (!this.left){
      // Create new binary search tree
      this.left = new BST(value);
    }
    else{
      // RECURSION
      // There is a left child, run insert method on the node
      this.left.insert(value);
    }
  }
  else if (value > this.value){
    if (!this.right){
      this.right = new BST(value);
    }
    else{
      this.right.insert(value)
    }
  }
}

// CONTAINS
BST.prototype.contains = function(value) {
  if (value === this.value){
    return true;
  }

  else if(value < this.value){
    if (!this.left){
      return false;
    }
    else{
      return this.left.contains(value);
    }
  }
  else if(value > this.value){
    if (!this.right){
      return false;
    }
    else{
      return this.right.contains(value);
    }
  }
}


// DEPTH FIRST TRAVERAL
BST.prototype.depthFirstTraveral = function(iteratorFunc, order){
  // PRE ORDER
  // Used to make a copy of the tree
  if (order === "pre-order"){
    iteratorFunc(this.value);
  }
  if (this.left){
    this.left.depthFirstTraveral(iteratorFunc, order);
  }

  // IN ORDER
  if (order === "in-order"){
    iteratorFunc(this.value);
  }

  // POST ORDER
  // Used to safely delete node
  if (this.right){
    this.right.depthFirstTraveral(iteratorFunc, order);
  }
  if (order === "post-order"){
    iteratorFunc(this.value)
  }
}

const bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(45);
bst.insert(60);
bst.insert(100);
bst.insert(10);
bst.insert(35);
bst.insert(59);
bst.insert(85);
bst.insert(105);

bst.depthFirstTraveral(log, "post-order");

function log(value) {
  console.log(value);
}