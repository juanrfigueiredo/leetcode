
//Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  //check if one of the lists is undefined
  if(!list1 || !list2){
    if(list1) return list1;
    else return list2;
  }
  
  return recursion(list1,list2)
};


function recursion (node1, node2) {
  //both nodes are undefined
  if(!node1 && !node2){
    return undefined;
  }
  //node 1 is undefined
  if(!node1){
    return new ListNode(node2.val, recursion(node1,node2.next));
  }
  
  //node 2 is undefined
  if(!node2) {
    return new ListNode(node1.val, recursion(node1.next,node2));
  }

  //none is undefined
  if(node1.val < node2.val){
    return new ListNode(node1.val, recursion(node1.next, node2));
  }else {
    return new ListNode(node2.val, recursion(node1, node2.next));
  }

}