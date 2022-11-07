import axios from "axios";

export const getCars = async () => {
  try {
    const response = await axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");

    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export const filterCars = async (req, res) => {
  const result = [data];
  const { driver, date, time, capacity } = req.query;

  console.log(req.query);

  

  

  

  return res.status(200).json(result);
};