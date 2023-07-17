import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Project() {
  return(
    <Router>
      <div>
        <div>Project C 소개</div>
        <Link to='/project-c'></Link>
        <div>Project A 소개</div>
        <Link to='/project-a'></Link>
        <div>Project B 소개</div>
        <Link to='/project-b'></Link>
        <Routes>
          <Route path='/project-c' element={<ProjectC />} />
          <Route path='/project-a' element={<ProjectA />} />
          <Route path='/project-b' element={<ProjectB />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Project;