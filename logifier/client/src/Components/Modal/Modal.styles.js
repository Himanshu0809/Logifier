import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },

  modalWrapper: {
      marginTop: '30px',
  },
}));

export const PrettifiedData = styled.div`
    margin-left: 30px;
`;