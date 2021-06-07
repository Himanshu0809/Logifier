import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import DataGrid from "../DataGrid";
import { useStyles } from "./TabPanel.styles.js";
var jsonData = require("./mockData.json");

const totalValues = Object.keys(jsonData).length;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {[...Array(totalValues)].map((x, i) => {
          return (
            <Tab
              label={JSON.stringify(jsonData[i + 1].metadata.tableName)}
              {...a11yProps(i)}
            />
          );
        })}
      </Tabs>
      {[...Array(totalValues)].map((x, i) => {
        return (
          <TabPanel value={value} index={i} className={classes.panelWrapper}>
            <DataGrid
              initialData={jsonData[i + 1].data.map((data) => {
                return Object.entries(data).map(([key, value], i) => {
                  if (typeof value !== "string") {
                    return JSON.stringify(value);
                  } else {
                    return value;
                  }
                });
              })}
              initialColumns={jsonData[i + 1].metadata.tableColumns}
            />
          </TabPanel>
        );
      })}
    </div>
  );
}
