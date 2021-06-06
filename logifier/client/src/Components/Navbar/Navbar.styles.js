import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    fontWeight: 700,
    fontSize: 30,
    marginLeft: 30,
    flexGrow: 1,
  },

  navbarWrapper: {
    marginBottom: "20px",
  },
}));
