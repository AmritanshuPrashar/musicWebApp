import React from 'react';

import { loader } from '../assets';

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className="font text-2xl text-white mt-2">{"Made with ❤️ By Amritanshu Prashar"}</h1>
  </div>
);

export default Loader;