import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import formatHighlight from 'json-format-highlight'
import {useStyles, PrettifiedData} from './Modal.styles.js';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Modal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.isOpen);

  const handleClose = () => {
    props.setIsOpenMethod();
    setOpen(false);
  };

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} className={classes.modalWrapper}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Prettified Logs
            </Typography>
          </Toolbar>
        </AppBar>
		<PrettifiedData>
		<pre>
          <code
            dangerouslySetInnerHTML={{
              __html: formatHighlight(props.data)
            }}
          />
        </pre>
		</PrettifiedData>
      </Dialog>
    </div>
  );
}

export default Modal;
