import React from "react";
import { useEffect, useState } from "react";
import "../styles/App.css";
import VennConstructor from "../components/VennConstructor";

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
          <h4>what?</h4>
          <p>
            <small></small>
          </p>
        </div>

        <div className="item" style={{ "--color": "#6DB465" }}>
          <h4>why?</h4>
          <p>
            <small></small>
          </p>
        </div>

        <div className="item" style={{ "--color": "#F2C14E" }}>
          <h4>how?</h4>
          <p>
            <small></small>
          </p>
        </div>

        <div className="item grid" style={{ "--color": "#f2f2f2" }}>
          <p>
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
          <p>
            To indicate that the set represented by a region is empty--we, in
            Venn's words "destroy" the region by shading it grey. A shaded
            region represents emptiness but a non-shaded region does not
            represent non-emptiness. Thus, Venn Diagrams were initially not
            equipped to represent that a certain region was non-empty. As Venn
            noted the representation of non-emptiness requires "some additional
            form of diagrammatical notation" (Venn 1883).{" "}
          </p>
          <p>
            Venn initially suggested different kinds of marking or shading: one
            kind for "destruction" and one kind for "salvation"This would get
            unwieldy with multiple overlapping shadings. So Venn suggests an
            alternative proposal: ``perhaps the simplest way is to use numerals
            to mark the compartments one or other of which is to be secured by
            each particular proposition" (Venn1894). On this proposal, one
            places occurrences of a numeral in various cells. The diagram then
            represents that the set associated with the union of these cells is
            non-empty.
          </p>
        </div>
        <div className="item grid" style={{ "--color": "#f2f2f2" }}>
          {" "}
          <VennConstructor
            cellVars={cellVars}
            fillColors={fillColors}
            handleClick={handleClick}
          ></VennConstructor>
          <h5>Cells counted: {counter}</h5>
        </div>
        <div className="item grid" style={{ "--color": "#f2f2f2" }}>
          <div>
            <img
              src="https://brianrabern.net/venn-semantics.png"
              alt="Venn Semantics"
              style={{ width: "300px", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
