import React, { FC } from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'

const Header: FC = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="h1" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        <i className="devicon-github-original"></i>GitTech
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
