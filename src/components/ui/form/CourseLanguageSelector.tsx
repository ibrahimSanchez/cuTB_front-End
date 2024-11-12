'use client';

import React, { useEffect, useState } from 'react';
import { DialogContent, DialogActions, Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import { getLanguages } from '@/api';
import { Language } from '@/interfaces';


interface CourseLanguageSelectorProps {
    onLanguagesSelected: (languageIds: string[]) => void;
}

export default function CourseLanguageSelector({ onLanguagesSelected }: CourseLanguageSelectorProps) {
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
        onLanguagesSelected(selectedLanguages);
    };

    return (
        <>
            <DialogContent>
                <Typography variant="h6" gutterBottom>
                    Selecciona al menos un idioma:
                </Typography>
                <Grid container spacing={2}>
                    {languages.map((language) => (
                        <Grid item xs={6} sm={4} key={language.uid}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={selectedLanguages.includes(language.uid)}
                                        onChange={() => handleLanguageChange(language.uid)}
                                    />
                                }
                                label={language.language}
                            />
                        </Grid>
                    ))}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={handleAddLanguages}
                    className='bg-[--primary] hover:bg-[--secondary] text-white'
                    disabled={selectedLanguages.length === 0}
                >
                    Añadir
                </Button>
            </DialogActions>
        </>
    );
}
