import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 700,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
