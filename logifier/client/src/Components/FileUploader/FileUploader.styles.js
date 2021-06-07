import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const UploadFileHeader = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
`;

export const FileUploadWrapper = styled.div`
  margin: 20px 0px;
  display: flex;
  position: relative;
  justify-content: space-around;
`;

export const HeaderHorizontalRule = styled.hr`
  border: 0.5px solid #3f51b5;
`;

export const FileNameLabel = styled.div`
  font: 400 13.3333px Arial;
  margin-left: 5%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre;
  margin: 10px 0px 20px 5%;
`;

export const useStyles = makeStyles((theme) => ({
  filaNameInput: {
    backgroundColor: "white",
  },

  uploadIcon: {
    color: "#3f51b5",
    display: "flex",
    justifyContent: "center",
    width: "50px",
    border: "6px dashed #3f51b5",
    cursor: "pointer",
  },

  uploadButton: {
    padding: "15px",
    width: "70%",
    backgroundColor: "#3f51b5",
    color: "white",
  },
}));
