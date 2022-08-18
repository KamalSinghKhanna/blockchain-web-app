import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import "./Chart.css";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

function Chart() {
  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        axis: "x",
        label: "First DataSet",
        data: [65, 59, 80, 81, 56, 55, 40, 69, 23, 34, 21, 56],
        backgroundColor: "rgb(94, 125, 209)",
        borderColor: "white",
        borderWidth: 3,
      },
    ],

    options: {
      responsive: true,
    },
  });

  ChartJS.register(
    LineElement,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler
  );

  useEffect(() => {
    const array = [];
    axios
      .get(
        "https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json"
      )
      .then((response) => {
        let description = response.data.description;
        let datas = response.data.values;
        datas.map((item, index) => {
          array.push(item.y);
          return null;
        });
        setData({
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              axis: "x",
              label: "First DataSet",
              data: array,
              backgroundColor: "rgb(94, 125, 209)",
              borderColor: "white",
              borderWidth: 3,
            },
          ],

          options: {
            responsive: true,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="chart">
      <h1>Charts</h1>
      <div>
        <Line data={data} />
      </div>
    </div>
  );
}

export default Chart;
