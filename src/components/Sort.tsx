import React, { FC } from 'react'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'

type Props = {
    sort: string
    handleChangeSort: (event: React.MouseEvent<HTMLElement>, value: string) => void
}

const Sort: FC<Props> = ({ sort, handleChangeSort }) => {
    return (
        <>
            <ToggleButtonGroup sx={{ my: 2 }} color="primary" value={sort} exclusive onChange={handleChangeSort}>
                <ToggleButton value="">RELATED</ToggleButton>
                <ToggleButton value="stars">POPULAR</ToggleButton>
                <ToggleButton value="updated">LATEST</ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}

export default Sort
