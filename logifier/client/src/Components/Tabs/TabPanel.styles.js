import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    minHeight: "700px",
    marginTop: "100px",
  },

  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: "20%",
    maxWidth: "20%",
  },

  panelWrapper: {
    maxWidth: "90%",
    maxHeight: "100%",
  },

  dataTableWrapper: {
    maxHeight: "10%",
  },
}));
