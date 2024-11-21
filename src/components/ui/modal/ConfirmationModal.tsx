import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
} from '@mui/material';

interface ConfirmationModalProps {
    open: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export function ConfirmationModal({
    open,
    title,
    message,
    onConfirm,
    onCancel,
}: ConfirmationModalProps) {
    return (
        <Dialog open={open} onClose={onCancel} fullWidth maxWidth="xs">
            <DialogTitle className='text-[--primary]'>{title}</DialogTitle>
            <DialogContent>{message}</DialogContent>
            <DialogActions>
                <Button
                    onClick={onConfirm}
                    className="bg-red-800 hover:bg-primary text-white"
                >
                    Confirmar
                </Button>
                <Button
                    onClick={onCancel}
                    className="bg-secondary hover:bg-text_color text-white"
                >
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
