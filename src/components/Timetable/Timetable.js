import React from 'react';
import "./Timetable.css";
import { useNavigate } from "react-router-dom";
import Iframe from 'react-iframe'

const Timetable = () => {
  const navigate = useNavigate();

  return (
    <div>
      <iframe src="https://nusmods.com/timetable/sem-1" height={1000} width={1850} top={20}></iframe>
    </div>
  );
};

export default Timetable;