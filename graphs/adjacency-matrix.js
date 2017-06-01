/* Adjacency List
* Not Space Effecient, especially for sparse graphs
* however, determining edge existence is just an array lookup
* directed graphs have symetry in the table from top left to bottom right, 
undirected graphs do not
* this means that for directed graphs, half the information is duplication

A --- B
|     |
C --- D

w = weight (boolean for unweighted)

    A   B   C
A       w   w

B   w       w

C   w       w



*/
// adjacency list class
// vertex class?