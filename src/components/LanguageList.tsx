import React, { FC } from 'react'
import { IconButton } from '@mui/material'
import languages from '../data/languages'

type Props = {
    currentLanguage: Language
    handleChangeLanguage: (language: Language) => void
}

const LanguageList: FC<Props> = ({ currentLanguage, handleChangeLanguage }) => {
    return (
        <>
            {languages.map((language: Language) => (
                <IconButton
                    aria-label="fingerprint"
                    color="secondary"
                    key={language.id}
                    sx={{
                        p: 3,
                        '& i': {
                            fontSize: {
                                md: '100px',
                                sm: '70px',
                                xs: '50px',
                            },
                        },
                        ...(language.id === currentLanguage.id && {
                            backgroundColor: 'moccasin !important',
                        }),
                    }}
                    onClick={() => handleChangeLanguage(language)}
                >
                    <i className={language.class}></i>
                </IconButton>
            ))}
        </>
    )
}

export default LanguageList
