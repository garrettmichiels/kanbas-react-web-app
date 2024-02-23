import ModuleList from "./List";
import ListButtons from "./ListButtons";

function Modules() {
  return (
    <div className="flex-column flex-fill">
        <div className="flex-grow-0 me-2 d-none d-xl-block ms-2">
            <ListButtons />
            </div>
        
        <ModuleList />
    </div>
  );
}
export default Modules;