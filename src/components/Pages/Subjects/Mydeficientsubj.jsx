import React, { useState } from "react";
import "./Mydeficientsubj.css";

const Mydeficientsubj = ({ selectedSubjects, removeSubject, className }) => {
  return (
    <div className={`defsubjwrapper ${className}`}>
      {selectedSubjects &&
        selectedSubjects.map((subject, index) => (
          <div
            key={index}
            className="subject"
            onClick={() => removeSubject(subject.code, subject.name)}
          >
            <div className="defsubjectcode">{subject.code}</div>
            <div className="defsubjectinfo">
              <h3>{subject.name}</h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Mydeficientsubj;
