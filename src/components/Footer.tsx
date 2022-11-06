import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'

const Footer: FC = () => {
    return (
        <Box
            sx={{
                height: '60px',
                position: 'absolute',
                bottom: 0,
                bgcolor: 'primary.main',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography sx={{ color: '#FFFFFF' }}>github.com/xignp/gittech</Typography>
        </Box>
    )
}

export default Footer
