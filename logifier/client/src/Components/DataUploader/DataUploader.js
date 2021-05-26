import React, {useState, useRef} from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import axios from "axios";

export default function DataUploader() {
    const inputRef = useRef(null);
    const [data, setData] = useState(null);


    const sendData = ()=> {
        let data = inputRef.current.value;
        axios
        .post("/api/world", {data: data})
        .then((res) => {
            setData(JSON.stringify(res.data));
            console.log(res);
        });
    }

  return (
    <Grid container spacing={0}>
      <Grid item xs={8}>
        <TextField id="standard-name" label="Name" inputRef={inputRef}/>
      </Grid>
      <Grid item xs={4}>
        <Button variant="contained" color="primary" onClick={()=>sendData()}>
          Submit
        </Button>
      </Grid>
      {data}
    </Grid>
    
  );
}
