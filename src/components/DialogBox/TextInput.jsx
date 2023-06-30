import React from 'react'
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styles from './TextInput.module.css'

export const TextInput = () => {
    return (
        <>
            <form className={styles.wrapForm}  noValidate autoComplete="off">
            <TextField
                id="standard-text"
                label="Enter your message..."
                className={styles.wrapText}
                //margin="normal"
            />
            <Button variant="contained" color="primary" className={styles.button}>
                <SendIcon />
            </Button>
            </form>
        </>
    )
}



