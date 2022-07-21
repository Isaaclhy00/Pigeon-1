import React from 'react';
import "./Timetable.css";
import { useNavigate } from "react-router-dom";

const Timetable = () => {
  const navigate = useNavigate();

  return (
    <div>
      <iframe src="https://nusmods.com/timetable/sem-1" style={{position: 'relative', height: 800, width: 1000}}></iframe>
      <button onClick={() => navigate("/Pigeon/Dashboard")}>Back</button>
    </div>
  );
};

export default Timetable;