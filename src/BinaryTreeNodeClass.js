class BinaryTreeNodeClass {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.x = 0;
      this.y = 0;
    }
  
    addLeft() {
      this.left = new BinaryTreeNodeClass(this.value * 2);
    }
  
    addRight() {
      this.right = new BinaryTreeNodeClass(this.value * 2 + 1);
    }
  
    addChildren() {
      if (!this.left) {
        this.addLeft();
      }
      if (!this.right) {
        this.addRight();
      }
    }
  
    removeChildren() {
      this.left = null;
      this.right = null;
    }
  
    isLeaf() {
      return !this.left && !this.right;
    }
  }
  
export default BinaryTreeNodeClass;
  