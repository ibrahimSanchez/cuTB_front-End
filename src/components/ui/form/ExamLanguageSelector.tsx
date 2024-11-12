'use client';

import React, { useEffect, useState } from 'react';
import { DialogContent, DialogActions, Button, Checkbox, FormControlLabel, Box, Typography } from '@mui/material';
import { getLanguages } from '@/api';

interface Language {
    uid: string;
    language: string;
}

interface ExamLanguageSelectorProps {
    onLanguagesSelected: (languageIds: string[]) => void;
}

export default function ExamLanguageSelector({ onLanguagesSelected }: ExamLanguageSelectorProps) {
    const [languages, setLanguages] = useState<Language[]>([]);
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

    useEffect(() => {
        const loadLanguages = async () => {
            const res = await getLanguages();
            setLanguages(res.data.languages);
        };
        loadLanguages();
    }, []);

    const handleLanguageChange = (id: string) => {
        setSelectedLanguages((prev) =>
            prev.includes(id) ? prev.filter((langId) => langId !== id) : [...prev, id]
        );
    };

    const handleAddLanguages = () => {
        if (selectedLanguages.length === 0) {
            alert('Debe seleccionar al menos un lenguaje.');
        } else {
            onLanguagesSelected(selectedLanguages);
        }
    };

    return (
        <>
            <DialogContent>
                <Typography variant="h6" gutterBottom>
                    Selecciona los idiomas en los que estará disponible el examen:
                </Typography>
                <Box display="flex" flexDirection="column">
                    {languages.map((language) => (
                        <FormControlLabel
                            key={language.uid}
                            control={
                                <Checkbox
                                    checked={selectedLanguages.includes(language.uid)}
                                    onChange={() => handleLanguageChange(language.uid)}
                                />
                            }
                            label={language.language}
                        />
                    ))}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleAddLanguages}
                    className="bg-[--primary] hover:bg-[--secondary] text-white"
                >
                    Añadir Idiomas
                </Button>
            </DialogActions>
        </>
    );
}
