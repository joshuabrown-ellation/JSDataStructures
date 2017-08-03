/**
 * Binary Search Tree
 * Created by joshuabrown on 8/3/17.
 * each Node has a maximum of two children pointers
 *           node
 *           /  \
 *        node  node
 *        /     /  \
 *     node  node  node
 *     /  \         \
 *    /   \        node
 *  node  node
 *
 *  You start with one node, the "root node"
 *  when you add children nodes, you add the child on the left if (child <= parent)
 *  if (child > parent) add to right node
 *
 *  We will want to have functions:
 *  - add Node
 *  - remove Node
 *  - Depth first Traversal search
 *  - Breadth first Traversal search
 */

