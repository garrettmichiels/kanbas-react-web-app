import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./moduleReducer";
import "./index.css";
import { KanbasState } from "../../Store/index";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <>
        <input className="form-control ml-2" style={{width:"fit-content"}} value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}/>
        <textarea className="form-control" style={{width:"fit-content"}} value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}/>
        <button type="button" className="btn btn-success" style={{ border: "none", color: "black" }}
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        <button
              type="button"
              className="btn btn-primary"
              style={{ marginRight: "5px", border: "none", color: "black" }}
              onClick={() => dispatch(updateModule(module))}>Update</button>

      
      <ul className="list-group wd-modules">
        {moduleList.filter((module) => module.course === courseId)

        .map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setModule(module)}>
            <div>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginRight: "5px", border: "none", color: "black" }}
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

            <button
              type="button"
              className="btn btn-danger"
              style={{ border: "none", color: "black" }}
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>

              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {module._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;