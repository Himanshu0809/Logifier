import React, { useState} from "react";

const DataContext = React.createContext({
    uploadedFileData: null,
    handleUploadedFileData: ()=>{}
});

export const DataProvider = (props) => {
  const [uploadedFileData, setUploadedFileData] = useState(null);
  
  const handleUploadedFileData = (data) => {
    setUploadedFileData(data);
  };

  return (
    <DataContext.Provider
      value={{
          uploadedFileData: uploadedFileData,
          handleUploadedFileData: handleUploadedFileData
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
