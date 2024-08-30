import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationArrow, FaInfoCircle, FaBuilding, FaUsers } from 'react-icons/fa';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ProfileDesa = () => {


        {/* Charts Section */}
        <div className="space-y-12">
         <h1> FITUR DALAM PROSES PENGEMBANGAN </h1>
         <p>kkn unhaz 2024....loading</p>

        </div>
     
};

export default ProfileDesa;
