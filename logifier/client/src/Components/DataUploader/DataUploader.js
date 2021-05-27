import React, {useState, useRef, useEffect} from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import sendData from '../../services/data_uploader_service';

export default function DataUploader() {
    const inputRef = useRef(null);
    const [inputData, setInputData] = useState(null);
    const [data, setData] = useState(null);

    const clickHandler = () => {
      setInputData(inputRef.current.value);
    };

    useEffect(() => {
      const getData = async () => {
        let returnData =  await sendData(inputData);
        console.log("herhe",returnData);
        setData(returnData.data);
      }
      getData();
    },[inputData]);

  return (
    <>
    <Grid container spacing={0}>
      <Grid item xs={8}>
        <TextField id="standard-name" label="Name" inputRef={inputRef}/>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" color="primary" onClick={clickHandler}>
          Submit
        </Button>
      </Grid>
      {data}
    </Grid>  
  </>
  );
}
