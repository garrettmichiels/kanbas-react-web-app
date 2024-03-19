function ListButtons() {
    return (
        <>
        
        <div className="btn-group float-end" role="group" aria-label="Button group with nested dropdown">
    <button type="button" className="btn btn-primary" style={{"border":"none",  "backgroundColor": "rgba(104, 100, 100, 0.573)"}}>Collapse All</button>
    <button type="button" className="btn btn-primary" style={{"border":"none", "backgroundColor": "rgba(104, 100, 100, 0.573)"}}>View Progress</button>
  
    <div className="btn-group" role="group">
      <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown
      </button>
      <ul className="dropdown-menu" style={{"border":"none", "backgroundColor": "rgba(104, 100, 100, 0.573)"}} aria-labelledby="btnGroupDrop1">
        <li className="dropdown-item">Publish All</li>
        <li className="dropdown-item">Publsh All Modules and Items</li>
        <li className="dropdown-item">Publsh Modules Only</li>
        <li className="dropdown-item">Unpublsh All</li>
      </ul>
    </div>
    <button type="button" className="btn btn-primary" style={{"border":"none", "backgroundColor": "red"}}>+ Module</button>
    <button type="button" className="btn btn-primary" style={{"border":"none", "backgroundColor": "rgba(104, 100, 100, 0.573)"}}><i className="fa fa-ellipsis-v pe-1"></i></button>
  </div>
  
  </>
    )
}
export default ListButtons;