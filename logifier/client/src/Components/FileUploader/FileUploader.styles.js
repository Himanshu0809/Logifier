import styled from "styled-components";

export const UploadFileHeader = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 34px;
`;

export const FileUploadWrapper = styled.div`
  background: #3f51b5;
  height: 300px;
  width: 300px;
  position: relative;
  margin: 15px auto;
`;

export const FileUploadText = styled.span`
  margin: 30px 0px 10px 0px;
  color: white;
  display: block;
  position: absolute;
  top: 2%;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 25px;
`;

export const FileUploadIcon = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 4% auto auto auto;
  width: 50%;
  height: 50%;
  border: 6px dashed #d8d8d8;
`;
