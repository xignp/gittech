import React, { FC } from 'react'
import { Fab } from '@mui/material'
import { KeyboardArrowUp } from '@mui/icons-material'

const FloatButton: FC = () => {
    const handleScrollTop = (event: React.MouseEvent) => {
        window.scroll({ top: 0, behavior: 'smooth' })
    }

    return (
        <Fab
            onClick={handleScrollTop}
            color="secondary"
            sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 99999 }}
        >
            <KeyboardArrowUp />
        </Fab>
    )
}

export default FloatButton
