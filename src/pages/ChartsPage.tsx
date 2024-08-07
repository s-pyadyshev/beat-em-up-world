import { useEffect, useState } from "react";
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
import { countBy, flatten, isNumber } from "lodash";
import { Container } from "react-grid-system";
import Button from "../components/Button";
import "./Pages.scss";

interface IChartData {
  data: any;
  name: any;
  activeChart: any;
}

const buttons = [
  {
    value: "releaseYear",
    name: "Release year",
  },
  {
    value: "platform",
    name: "Platform",
  },
  {
    value: "country",
    name: "Country",
  },
  {
    value: "dashing",
    name: "Dashing",
  },
  {
    value: "grabs",
    name: "Grabs",
  },
  {
    value: "groundHit",
    name: "Ground hit",
  },
  {
    value: "deathBlow",
    name: "Death blow",
  },
  {
    value: "weapons",
    name: "Weapons",
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    payload[0].chartType = "AreaChart";
    return (
      <div className="custom-tooltip">
        <h3 className="time">{label}</h3>
        <div className="label">{payload[0].value}</div>
      </div>
    );
  }

  return null;
};

const ChartsPage = () => {
  const [filteredChart, setFilteredChart] = useState<IChartData>({
    data: [],
    name: "name",
    activeChart: "releaseYear",
  });
  // const [filterChartOptions, setFilterChartOptions] = useState({});
  // automatically subscribes to the Redux store
  const gamesList = useSelector((state: any) => state.gamesList.gamesList);

  // // Bad: always returning a new reference
  // const selectTodoDescriptions = (state) => {
  //   // This creates a new array reference!
  //   return state.todos.map((todo) => todo.text);
  // };

  const total = useSelector((state: any) => state.gamesList.total);
  const missing = useSelector((state: any) => state.gamesList.missing);

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
        activeChart: name,
      });
    } else {
      let uniqueGamesList = gamesList;
      if (value !== "releaseYear" && value !== "platform") {
        uniqueGamesList = gamesList.filter(
          (game: any) => !game.hasOwnProperty("unalteredPort")
        );
      }
      const counted = countBy(uniqueGamesList, value); // {1988: 9}
      const countedArray = Object.keys(counted).map((key) => ({
        key,
        value: counted[key],
      })); // {key: '1986', value: 9} convert data for charts

      // TODO filter first?
      const filteredArr: any = countedArray.filter(
        (item) => item.key !== "null" && item.key !== "undefined"
      );

      setFilteredChart({
        data: filteredArr,
        name,
        activeChart: name,
      });
    }
  };

  const handleFilter = (event: any) => {
    filterCharts(
      event.currentTarget.getAttribute("data-value"),
      event.currentTarget.getAttribute("data-name")
    );
  };

  useEffect(() => {
    filterCharts("releaseYear", "Release year");
  }, [gamesList]);

  return (
    <div className="charts">
      <div className="charts__buttons">
        {buttons.map((button) => (
          <Button
            active={filteredChart.activeChart === button.name}
            key={button.value}
            data-value={button.value}
            data-name={button.name}
            onClick={handleFilter}
            icon={button.value}
          >
            {button.name}
          </Button>
        ))}
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
            <Line
              name={filteredChart.name}
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Legend wrapperStyle={{ fontSize: "20px" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Container>
        <p className="charts__note">
          The stats are based on data from {total - missing} games. Unaltered
          ports were excluded except for release year and platform.
        </p>
      </Container>
    </div>
  );
};

export default ChartsPage;
