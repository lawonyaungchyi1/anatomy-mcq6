import { Typography, Box, Button } from "@mui/material";
import { zoology } from "../data/dummy";
import { useState, useEffect } from "react";
import FormChild from "./FormChild";
import { toast } from "react-toastify";

const Form = () => {
  const [zoologyData, setZoologyData] = useState([]);
  const [counter, setCounter] = useState(1);

  const increaseCount = () => setCounter(counter + 1);
  const decreaseCount = () => setCounter(counter - 1);

  useEffect(() => {
    setZoologyData(zoology.filter((i) => i.id === counter));
  }, []);
  useEffect(() => {
    setZoologyData(zoology.filter((i) => i.id === counter));
  }, [counter]);

  const notify = () => {
    toast.success(
      <>
        <div>အဖြေမှန်များ</div>
        {zoology[counter - 1].correctAnswers.map((i) => (
          <div key={zoology[counter - 1].correctAnswers.indexOf(i)}>
            <div>{i}</div>
          </div>
        ))}
      </>,
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };
  return (
    <Box>
      <Box
        sx={{
          marginTop: "2%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          onClick={decreaseCount}
          disabled={counter === 1 ? true : false}
        >
          Prev
        </Button>
        <Button variant="contained" color="secondary" onClick={notify}>
          Check
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={increaseCount}
          disabled={counter === zoology.length ? true : false}
        >
          Next
        </Button>
      </Box>
      {zoologyData.map((i) => (
        <div key={i.id}>
          <Box
            sx={{
              height: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Typography variant="h6">
              Q.{i.id} {i.questions}
            </Typography>
          </Box>
          <Box
            sx={{
              height: "50%",
            }}
          >
            {i.selections.map((item, index) => (
              <FormChild item={item} index={index} key={index} />
            ))}
          </Box>
        </div>
      ))}
    </Box>
  );
};

export default Form;
