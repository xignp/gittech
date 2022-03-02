import React, { FC } from 'react'
import { Avatar, Link, List, ListItem, ListItemAvatar, ListItemText, Chip, Box } from '@mui/material'
import { ForkRight, Star } from '@mui/icons-material'

type Props = {
    items: Repository[]
}

const RepositoryList: FC<Props> = React.memo(({ items }) => {
    return (
        <>
            <List>
                {items.map((item: Repository) => {
                    return (
                        <ListItem divider={true} alignItems="flex-start" key={item.id}>
                            <ListItemAvatar>
                                <Avatar src={item.avatar_url} />
                            </ListItemAvatar>

                            <ListItemText secondary={item.description}>
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            mb: 1,
                                        }}
                                    >
                                        <Chip
                                            icon={<Star />}
                                            label={item.stargazers_count}
                                            variant="outlined"
                                            size="small"
                                        />
                                        <Chip
                                            icon={<ForkRight />}
                                            label={item.forks_count}
                                            variant="outlined"
                                            size="small"
                                            sx={{ ml: 1 }}
                                        />
                                    </Box>

                                    <Link href={item.html_url} target="_blank" rel="noopener">
                                        {item.full_name}
                                    </Link>
                                </Box>
                            </ListItemText>
                        </ListItem>
                    )
                })}
            </List>
        </>
    )
})

export default RepositoryList
