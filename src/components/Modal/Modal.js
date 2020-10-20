import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const Modal = (props) => {
    const [fullWidth] = React.useState(true);
    const styles = theme => ({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

    const DialogTitle = withStyles(styles)(props => {
        const { children, classes, onClose } = props;
        return (
          <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
              <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
              </IconButton>
            ) : null}
          </MuiDialogTitle>
        );
      });

    return(
        <Dialog open={props.open} 
                fullWidth={fullWidth}
                onClose={props.onClose} 
                aria-labelledby="form-dialog-title">
            <DialogTitle id="customized-dialog-title" onClose={props.onClose}>{props.data.title}</DialogTitle>
            <DialogContent dividers>
                <DialogContentText>
                    {props.data.description}
                </DialogContentText>
                {props.children}
            </DialogContent>
        </Dialog>
    );
}

export default Modal;