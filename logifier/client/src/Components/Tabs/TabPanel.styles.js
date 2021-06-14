import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    minHeight: "700px",
    maxHeight: '800px',
    marginTop: "100px",
  },

  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: "20%",
    maxWidth: "20%",
  },

  panelWrapper: {
    maxWidth: "80%"
  },
}));

export const ModalData = styled.div`
  cursor: pointer;
`;