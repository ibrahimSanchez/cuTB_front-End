import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
} from '@mui/material';

interface MessageModalProps {
    open: boolean;
    title: string;
    message: string;
    isError?: boolean;
    onClose: () => void;
}

export function MessageModal({
    open,
    title,
    message,
    isError = false,
    onClose,
}: MessageModalProps) {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs" className="fixed inset-0 bg-opacity-50 z-50">
            <DialogTitle className={`text-lg font-semibold mb-4 text-[--primary] ${isError ? 'text-red-600' : 'text-green-600'}`}>
                {title}
            </DialogTitle>
            <DialogContent className="mb-6 text-[--text_color]">
                {message}
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={onClose}
                    className="bg-[--primary] hover:bg-[--secondary] text-white "
                >
                    Cerrar
                </Button>
            </DialogActions>

        </Dialog>
    );
}
