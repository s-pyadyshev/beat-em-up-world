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
import { useDispatch, useSelector } from "react-redux";
import { countBy, flatten, isNumber } from "lodash";
import { toggleFilter } from "../store/filters/actions";

interface IChartData {
  data: any;
  name: any;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    payload[0].chartType = "AreaChart";
    return (
      <div className="custom-tooltip">
        <span className="time">{label}</span> -{" "}
        <span className="label">{payload[0].value}</span>
      </div>
    );
  }

  return null;
};

const ChartsPage = () => {
  const dispatch = useDispatch();

  const [filteredChart, setFilteredChart] = useState<IChartData>({
    data: [],
    name: "name",
  });
  // const [filterChartOptions, setFilterChartOptions] = useState({});
  // automatically subscribes to the Redux store
  const gamesList = useSelector((state: any) => state.gamesList.gamesList);

  // // Bad: always returning a new reference
  // const selectTodoDescriptions = (state) => {
  //   // This creates a new array reference!
  //   return state.todos.map((todo) => todo.text);
  // };

  const filterCharts = (value: any, name: String) => {
    if (value === "weapons") {
      const weaponsArr = gamesList.map((item: any) => item.weapons);
      const weaponsSorted = flatten(weaponsArr).filter(
        (item: any) => item !== null && !isNumber(item)
      );
      const counted = countBy(weaponsSorted);
      const arr = Object.keys(counted).map((key) => ({
        key,
        value: counted[key],
      }));
      setFilteredChart({
        data: arr,
        name,
      });
    } else {
      const counted = countBy(gamesList, value);
      const arr = Object.keys(counted).map((key) => ({
        key,
        value: counted[key],
      }));
      // TODO filter first
      const filteredArr: any = arr.filter(
        (item) => item.key !== "null" && item.key !== "undefined"
      );
      setFilteredChart({
        data: filteredArr,
        name,
      });
    }
  };

  const handleFilter = (event: any) => {
    filterCharts(
      event.target.getAttribute("data-value"),
      event.target.getAttribute("data-name")
    );
  };

  useEffect(() => {
    dispatch(toggleFilter());
  }, []);

  useEffect(() => {
    filterCharts("releaseYear", "Release year");
  }, []);

  return (
    <div>
      <div>
        <button
          onClick={handleFilter}
          data-value="releaseYear"
          data-name="Release year"
        >
          Release Year
        </button>{" "}
        <button
          onClick={handleFilter}
          data-value="perspective"
          data-name="Perspective"
        >
          Perspective
        </button>{" "}
        <button
          onClick={handleFilter}
          data-value="platform"
          data-name="Platform"
        >
          Platform
        </button>{" "}
        <button onClick={handleFilter} data-value="country" data-name="Country">
          Country
        </button>{" "}
        <button onClick={handleFilter} data-value="dashing" data-name="Dashing">
          Dashing
        </button>{" "}
        <button onClick={handleFilter} data-value="grabs" data-name="Grabs">
          Grabs
        </button>{" "}
        <button
          onClick={handleFilter}
          data-value="groundHit"
          data-name="Ground hit"
        >
          Ground hit
        </button>{" "}
        <button
          onClick={handleFilter}
          data-value="deathBlow"
          data-name="Death blow"
        >
          Death blow
        </button>{" "}
        <button onClick={handleFilter} data-value="weapons" data-name="Weapons">
          Weapons
        </button>
      </div>
      <div style={{ width: "100%", height: 500 }}>
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={500}
            data={filteredChart.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="key" tick={{ fontSize: 12 }} />
            <YAxis dataKey="value" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              name={filteredChart.name}
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsPage;
