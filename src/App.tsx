import React, { FC } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { Box } from '@mui/material'
import 'devicon/devicon.min.css'
import theme from './theme'
import Header from './components/Header'
import Footer from './components/Footer'
import Top from './pages/Top'

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    minHeight: '100vh',
                    paddingBottom: '60px',
                    position: 'relative',
                    boxSizing: 'border-box',
                }}
            >
                <Header />
                <Top />
                <Footer />
            </Box>
        </ThemeProvider>
    )
}

export default App
