import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { countBy } from "lodash";

const ChartsPage = () => {
  const [filteredCharts, setFilteredCharts] = useState([
    {
      key: "1986",
      value: 3,
    },
  ]);
  // automatically subscribes to the Redux store
  const gamesList = useSelector((state: any) => state.gamesList.gamesList);

  // // Bad: always returning a new reference
  // const selectTodoDescriptions = (state) => {
  //   // This creates a new array reference!
  //   return state.todos.map((todo) => todo.text);
  // };

  const filterCharts = (name: String) => {
    const counted = countBy(gamesList, name);
    const arr = Object.keys(counted).map((key) => ({
      key,
      value: counted[key],
    }));
    const filteredArr: any = arr.filter((item) => item !== null);
    setFilteredCharts(filteredArr);
  };

  const handleFilter = () => {
    filterCharts("releaseYear");
  };

  useEffect(() => {
    console.log("render");
  }, [filteredCharts]);

  return (
    <div>
      <div>
        <button onClick={handleFilter}>test</button>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={500}
          data={filteredCharts}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="key" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            name="year"
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartsPage;
