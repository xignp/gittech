import React, { FC } from 'react'
import { Box, TextField } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Search } from '@mui/icons-material'

type Props = {
    isLoading: boolean
    keyword: string
    handleChangeKeyword: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    handleSubmit: (event: React.FormEvent) => void
}

const KeywordForm: FC<Props> = ({ isLoading, keyword, handleChangeKeyword, handleSubmit }) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        label="e.g. CRUD"
                        variant="outlined"
                        onChange={handleChangeKeyword}
                        value={keyword}
                    />
                    <LoadingButton
                        type="submit"
                        variant="contained"
                        endIcon={<Search />}
                        loading={isLoading}
                        loadingPosition="end"
                    >
                        SEARCH
                    </LoadingButton>
                </Box>
            </form>
        </>
    )
}

export default KeywordForm
