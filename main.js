function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {

  if (value <= this.value){
    // There is is no left child
    if (!this.left){
      // Create new binary search tree
      this.left = new BST(value);
    }
    else{
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


const bst = new BST(50);