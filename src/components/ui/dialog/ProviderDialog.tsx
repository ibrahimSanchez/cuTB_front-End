'use client';

import React from 'react';
import { Provider } from '@/interfaces';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ProviderCourses from '@/components/grid/ProviderCourses';
import ProviderExams from '@/components/grid/ProviderExams';

interface Props {
    open: boolean;
    handleClose: () => void;
    provider: Provider;
}

export const ProviderDialog = ({ open, handleClose, provider }: Props) => {
    const {
        uid,
        name,
        country,
        email,
        website,
        address,
        ReferencePerson,
        accreditedBy,
        city,
        phone,
        type
    } = provider;

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="sm"
        >
            <DialogTitle className="mb-4 text-2xl font-bold text-[#053b5e]" id="alert-dialog-title">
                Datos del proveedor
                <div className="w-full h-[2px] bg-[--primary] mt-2"></div>
            </DialogTitle>

            <DialogContent>
                <DialogContentText className="mb-4" id="alert-dialog-description">
                    <span className="font-bold text-[--text_color]">Nombre:</span> {name}
                </DialogContentText>
                <DialogContentText className="mb-4">
                    <span className="font-bold text-[--text_color]">Dirección:</span> {address}
                </DialogContentText>
                <DialogContentText className="mb-4">
                    <span className="font-bold text-[--text_color]">Ciudad:</span> {city}
                </DialogContentText>
                <DialogContentText className="mb-4">
                    <span className="font-bold text-[--text_color]">País:</span> {country}
                </DialogContentText>
                <DialogContentText className="mb-4">
                    <span className="font-bold text-[--text_color]">Teléfono:</span> {phone}
                </DialogContentText>
                <DialogContentText className="mb-4">
                    <span className="font-bold text-[--text_color]">Correo electrónico:</span> {email}
                </DialogContentText>
                <DialogContentText className="mb-4">
                    <span className="font-bold text-[--text_color]">Sitio web:</span> {website}
                </DialogContentText>
                <DialogContentText className="mb-4">
                    <span className="font-bold text-[--text_color]">Persona de referencia:</span> {ReferencePerson}
                </DialogContentText>
                <DialogContentText className="mb-4">
                    <span className="font-bold text-[--text_color]">Acreditado por:</span> {accreditedBy}
                </DialogContentText>

                <div className="mt-6">
                    <div className="w-full h-[1px] mb-4 bg-[--primary] mt-2"></div>

                    {
                        type === 'exam_provider' ?
                            <ProviderExams providerId={uid} /> :
                            <ProviderCourses providerId={uid} providerType={type} />
                    }
                </div>
            </DialogContent>
        </Dialog>
    );
};
