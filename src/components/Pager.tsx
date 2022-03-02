import React, { FC } from 'react'
import { Box, Pagination } from '@mui/material'

type Props = {
    totalCount: number
    page: number
    handleChangePage: (event: React.ChangeEvent<unknown>, page: number) => void
}

const Pager: FC<Props> = ({ totalCount, page, handleChangePage }) => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Pagination
                    count={totalCount < 1000 ? Math.ceil(totalCount / 100) : 10}
                    page={page}
                    onChange={handleChangePage}
                    color="primary"
                />
            </Box>
        </>
    )
}

export default Pager
