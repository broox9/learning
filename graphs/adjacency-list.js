/* Adjacency List
* Compact Space Effecient, especially for sparse graphs
* however, determining edge existence is expensive, especially for a dense graph


A --- B
|     |
C --- D

w = weight

A => (B, w?), (C, w?)
B => (A, w?), (D, w?)
C => (A, w?), (D, w?)

*/
// adjacency list class
// vertex class?