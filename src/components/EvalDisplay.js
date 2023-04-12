import React from 'react';


const props = {
  handleLoadClick: () => {},
  handleRandomClick: () => {},
  handleEvalClick: () => {},
  handleDomainChange: () => {},
  handleA1Change: () => {},
  handleA2Change: () => {},
  handleA3Change: () => {},
  domain: '',
  a1: '',
  a2: '',
  a3: '',
  domainDisplay: '',
  a1Display: '',
  a2Display: '',
  a3Display: '',
  evaluation: '',

  };



  const EvalDisplay = (props) => {

    const {handleLoadClick,
          handleRandomClick,
          handleEvalClick,
          handleDomainChange,
          handleA1Change,
          handleA2Change,
          handleA3Change,
          domain,
          a1,
          a2,
          a3,
          domainDisplay,
          a1Display,
          a2Display,
          a3Display,
          evaluation,

        } = props;



    return (<><div className="d-md-flex justify-content-md-end">

    <button type="button" className="btn btn-warning" onClick={handleLoadClick} >Load Model</button>
    <button type="button" className="btn btn-outline-warning" onClick={handleRandomClick} >Random </button>
    </div><div className="col border border-1 border-dark rounded" style={{ backgroundColor: "#f2f2f2" }}>

    <div>
    <br></br>
<h5>Specify  model</h5>
     <hr></hr>
    <form id="enter-model">

    <div className="form-floating mb-3">
    <label htmlFor="domain"><samp>Domain:</samp></label>
    <input  placeholder="0,1,2,3,..." required type="text" name="domain" id="domain" className="form-control" value={domain} onChange={handleDomainChange}/>
    <br></br>
    <hr></hr>
    <label htmlFor="interpretation"><samp>Interpretation:</samp></label>
    <div id="interpretation">
      <div className="form-group row">
        <label htmlFor="a1" className="col-sm-2 col-form-label">A&#8321;:</label>
        <div className="col-sm-10">
        <input  placeholder="subset of domain" required type="text" name="a1" id="a1" className="form-control" value={a1} onChange={handleA1Change}/>
        </div>

        <label htmlFor="a2" className="col-sm-2 col-form-label">A&#8322;:</label>
        <div className="col-sm-10">
        <input  placeholder="subset of domain" required type="text" name="a2" id="a2" className="form-control" value={a2} onChange={handleA2Change}/>
        </div>

        <label htmlFor="a3" className="col-sm-2 col-form-label">A&#8323;:</label>
        <div className="col-sm-10">
        <input  placeholder="subset of domain" required type="text" name="a3" id="a3" className="form-control" value={a3} onChange={handleA3Change}/>
        </div>

      </div>
  </div>
  </div>

  </form>
  <br></br>
      </div>
      <hr></hr>
      <h5>Current Model:</h5>
      <div style={{textAlign: 'left'}}>
      <p> Domian = {domainDisplay}</p>
      </div>


      <p> ⟦A&#8321;⟧ ={a1Display}</p>
      <p>⟦A&#8322;⟧ = {a2Display}</p>
      <p> ⟦A&#8323;⟧  ={a3Display}</p>

      <hr></hr>
      <br></br>
      <button type="button" className="btn btn-primary btn-block" onClick={handleEvalClick}>Evaluate</button>
      <br></br>

      <hr></hr>
      <div style={{textAlign: 'left'}}>



      <div>
      {evaluation == 'True' ? (<div className="alert alert-success">{evaluation}</div>) : null}
      {evaluation == 'False' ? (<div className="alert alert-danger">{evaluation}</div>) : null}
      </div>



      </div>
      </div></>

  );
  };

export default EvalDisplay;
