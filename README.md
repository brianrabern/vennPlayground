# vennPlayground
This is an interface for generating and semantically evaluating Venn Diagrams.

## Why?

This is in conneciton to a project on the formal syntax and compositional semantics of diagrams, especially diagrams used in logic such as quantificational diagrams and the diagrams associated with Peirce and Venn. The formal syntax and semantics for Venn Diagrams implemented in this application is based on B. Pickel and B. Rabern's "A Compositional Semantics for Venn Diagrams" (in progress). 

## Basic functionality

The application allows a user to construct a Venn Diagram according to the rules for "destruction" and "salvation".  A model can be specified and the diagram can be evalated for truth or falsity in te model. Random models can be generated. After constructing a diagram it can be set as a premise or conclusion and added to the 'argument stack". The validity of and argument can be checked, and a countermodel will be provided if the argument is invalid.


## Background issue

In "A Compositional Semantics for Venn Diagrams" B. Pickel and B. Rabern set out to show the following:

\begin{itemize}
\item[(i)] Each Venn Diagram can be specified by a finite number of applications of a finite number of syntactic rules to an enumerable vocabulary. 
\item[(ii)] The syntactic derivation of a Venn Diagram can be specified in a tree diagram on analogy with the syntactic derivation of a formula of a natural or formal language.
\item [(iii)] The truth conditions of a Venn Diagram can be compositionally specified in terms of its syntactic derivation. The semantics is compositional in that each syntactic rule in the derivation of a diagram corresponds to a semantic rule in the derivation of its truth conditions. More formally, if $\alpha$ is a stage in the syntactic derivation of a diagram that results from applying formation rule $\mu$ to $\beta_1,\ldots,\beta_n$, then the semantic value of $\alpha$ is the result of applying from function $f_\mu$ to the semantic values of $\beta_1,\ldots,\beta_n$.
\end{itemize}

## Imporvements/future

This is only a sketch. The point was just to try out some ideas. In addition to research on non-linguistic representaiton, the basic funtionality could be developed for teaching logic, and for creating interactive logic exersices. 
