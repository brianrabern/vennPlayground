import React from "react";
import { useEffect, useState } from "react";
import "../styles/App.css";
import VennConstructor from "../components/VennConstructor";
import ExistentialMarking from "../components/ExistentialMarking";

function About() {
  const [counter, setCounter] = useState(0);
  const [fillColors, setFillColors] = useState({
    cellA: "#f2f2f2",
    cellB: "#f2f2f2",
    cellC: "#f2f2f2",
    cellD: "#f2f2f2",
    cellE: "#f2f2f2",
    cellF: "#f2f2f2",
    cellG: "#f2f2f2",
    cellH: "#f2f2f2",
  });

  const [cellVars, setCellVars] = useState({
    cellA: [],
    cellB: [],
    cellC: [],
    cellD: [],
    cellE: [],
    cellF: [],
    cellG: [],
    cellH: [],
  });
  const [error, setError] = useState(false);
  const [regions, setRegions] = useState([]);

  function handleClick(event) {
    setError(false);
    if (event.target.id === "cellA" && !regions.includes("cellA")) {
      setRegions([...regions, "cellA"]);
      setFillColors((prevState) => {
        return {
          ...prevState,
          cellA: "#ff0000",
        };
      });
      
      setCounter(counter + 1);
    } else if (event.target.id === "cellB" && !regions.includes("cellB")) {
      setRegions([...regions, "cellB"]);
      setFillColors((prevState) => {
        return {
          ...prevState,
          cellB: "#00ff00",
        };
      });
      setCounter(counter + 1);
    } else if (event.target.id === "cellC" && !regions.includes("cellC")) {
      setRegions([...regions, "cellC"]);
      setFillColors((prevState) => {
        return {
          ...prevState,
          cellC: "#0000ff",
        };
      });
      setCounter(counter + 1);
    } else if (event.target.id === "cellD" && !regions.includes("cellD")) {
      setRegions([...regions, "cellD"]);
      setFillColors((prevState) => {
        return {
          ...prevState,
          cellD: "#ffff00",
        };
      });
      setCounter(counter + 1);
    } else if (event.target.id === "cellE" && !regions.includes("cellE")) {
      setRegions([...regions, "cellE"]);
      setFillColors((prevState) => {
        return {
          ...prevState,
          cellE: "#ffa500",
        };
      });
      setCounter(counter + 1);
    } else if (event.target.id === "cellF" && !regions.includes("cellF")) {
      setRegions([...regions, "cellF"]);
      setFillColors((prevState) => {
        return {
          ...prevState,
          cellF: "#800080",
        };
      });
      setCounter(counter + 1);
    } else if (event.target.id === "cellG" && !regions.includes("cellG")) {
      setRegions([...regions, "cellG"]);
      setFillColors((prevState) => {
        return {
          ...prevState,
          cellG: "#ffc0cb",
        };
      });
      setCounter(counter + 1);
    } else if (event.target.id === "cellH" && !regions.includes("cellH")) {
      setRegions([...regions, "cellH"]);
      setFillColors((prevState) => {
        return {
          ...prevState,
          cellH: "#008080",
        };
      });
      setCounter(counter + 1);
    }
  }

  return (
    <div>
      <br></br>
      <div id="cuadricula">
        <div className="item" style={{ "--color": "#3E989B" }}>
          <h4></h4>
          <p>
            <small></small>
          </p>
        </div>

        <div className="item" style={{ "--color": "#6DB465" }}>
          <h4></h4>
          <p>
            <small></small>
          </p>
        </div>

        <div className="item" style={{ "--color": "#F2C14E" }}>
          <h4></h4>
          <p>
            <small></small>
          </p>
        </div>

        <div className="item grid" style={{ "--color": "#f2f2f2" }}>
          <div>
        <p style={{ textAlign: 'justify' }}>
            In his 1880 article "On the Diagrammatic and Mechanical
            Representation of Propositions and Reasonings", John Venn introduced
            a scheme of diagrammatic representation which he took to be an
            improvement over traditional Eulerian circles--the basic system of
            representation was further developed in a textbook (Venn 1894).
            Paradigmatically, a Venn Diagram is given by a set of overlapping
            basic regions. The basic regions represent sets in a domain. The
            intersection, union, or relative complement of regions in a diagram
            represent the intersection, union, or relative complement of the
            sets in the domain represented by these regions. For example,
            consider a diagram with three basic regions A&#8321;, A&#8322;, and
            A&#8323;, which has 8 minimal regions or "cells". Count them.{" "}
            </p>
          
          <hr></hr>
          <p style={{ textAlign: 'justify' }}>
          
            To indicate that the set represented by a region is empty--we, in
            Venn's words "destroy" the region by shading it grey. A shaded
            region represents emptiness but a non-shaded region does not
            represent non-emptiness. Thus, Venn Diagrams were initially not
            equipped to represent that a certain region was non-empty. As Venn
            noted the representation of non-emptiness requires "some additional
            form of diagrammatical notation" (Venn 1883).{" "}
            </p>
          
          <hr></hr>
          <p style={{ textAlign: 'justify' }}>
            
            Venn initially suggested different kinds of marking or shading: one
            kind for "destruction" and one kind for "salvation". This would get
            unwieldy with multiple overlapping shadings. So Venn suggested an
            alternative proposal: ``perhaps the simplest way is to use numerals
            to mark the compartments one or other of which is to be secured by
            each particular proposition" (Venn 1894). On this proposal, one
            places occurrences of a numeral in various cells. The diagram then
            represents that the set associated with the union of these cells is
            non-empty.
            </p>
          
          <hr></hr>
          <figure>
          <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d7/John_Venn_2.jpg"
              alt="Venn"
              style={{ width: "400px", height: "auto" }}
            />
            <figcaption>John Venn</figcaption>
           </figure>
            </div>
        </div>
        <div className="item grid" style={{ "--color": "#f2f2f2" }}>
          {" "}
          <div>
          <VennConstructor
            cellVars={cellVars}
            fillColors={fillColors}
            handleClick={handleClick}
          ></VennConstructor>
          <h5>Cells counted: {counter}</h5>
          <br>
          </br><hr></hr>
          <ExistentialMarking  cellVars={cellVars}
            fillColors={fillColors}
            handleClick={handleClick}> </ExistentialMarking>
            <h5>Destruction and Salvation Marking</h5>
            
            </div>
        </div>
        <div className="item grid" style={{ "--color": "#f2f2f2" }}>
          
          <div>
          <p style={{ textAlign: 'justify' }}>
            The formal syntax and semantics for Venn Diagrams implemented on this page is based on <a href="https://bryanpickel.weebly.com/">B. Pickel </a>
             and <a href="https://brianrabern.net/">B. Rabern</a>'s "A Compositional Semantics for Venn Diagrams" (in progress).  </p>
            <hr></hr>
            <img
              src="https://brianrabern.net/venn-sem.png"
              alt="Venn Semantics"
              style={{ width: "400px", height: "auto" }}
            />
            <hr></hr>
            <h4>References:</h4>
           <p> <small>Hammer, Eric, & Danner, Norman. 1996. Towards a Model Theory of Diagrams. Journal of Philosophical Logic, 25(5), 463–482.</small></p>

           <p> <small>Moktefi, Amirouche, & Pietarinen, Ahti-Veikko. 2015. On the Diagrammatic Representation of Existential Statements with Venn Diagrams. Journal of Logic, Language and Information, 24(4), 361–374.</small></p>

           <p> <small>Moktefi, Amirouche, & Shin, Sun-Joo. 2012. A history of logic diagrams. Pages 611–682 of: Handbook of the History of Logic, vol. 11. Elsevier.</small></p>
           <p> <small>Shin, Sun-Joo. 1994. The logical status of diagrams. Cambridge University Press. </small></p>

           <p> <small>Venn, John. 1880. On the Diagrammatic and Mechanical Representation of
Propositions and Reasonings. Philosophical Magazine, 9(59), 1–18. </small></p>

<p> <small>Venn, John. 1894. Symbolic Logic. Macmillan and Company.</small></p>
<br>
</br><hr>
</hr>
<img
              src="https://brianrabern.net/venn1880.png"
              alt="Venn1880"
              style={{ width: "400px", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
