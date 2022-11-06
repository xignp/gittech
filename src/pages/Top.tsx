import React, { FC, useState } from 'react'
import { Container, Box, Typography, CircularProgress } from '@mui/material'
import { searchRepositories } from '../apis/github'
import LanguageList from '../components/LanguageList'
import KeywordForm from '../components/KeywordForm'
import Sort from '../components/Sort'
import Pager from '../components/Pager'
import RepositoryList from '../components/RepositoryList'
import FloatButton from '../components/FloatButton'

const Top: FC = () => {
    const [repositories, setRepositories] = useState<Repositories>({ totalCount: 1, items: [] })
    const [searched, setSearched] = useState<Searched>({} as Searched)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [currentLanguage, setCurrentLanguage] = useState<Language>({} as Language)
    const handleChangeLanguage = (language: Language) => {
        setCurrentLanguage(language)
    }

    const [keyword, setKeyword] = useState<string>('')
    const handleChangeKeyword = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setKeyword(event.target.value)
    }

    const [sort, setSort] = useState<string>('')
    const handleChangeSort = async (event: React.MouseEvent<HTMLElement>, value: string) => {
        setPage(1)
        setSort(value)
        search(searched.keyword, searched.currentLanguage, value, 1)
    }

    const [page, setPage] = useState<number>(1)
    const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setPage(page)
        search(searched.keyword, searched.currentLanguage, sort, page)
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setPage(1)
        setSort('')
        search(keyword, currentLanguage, '', 1)
    }
    const search = async (keyword: string, language: Language, sort: string, page: number) => {
        try {
            if (!keyword || Object.keys(language).length === 0) {
                return
            }
            setIsLoading(true)
            const repositories = await searchRepositories(keyword, language, sort, page)
            setSearched({ keyword, currentLanguage, sort })
            setIsLoading(false)
            setRepositories(repositories)
        } catch (error) {
            setIsLoading(false)
        }
    }

    return (
        <>
            <Container>
                <Typography align="center" variant="h4" component="h2" sx={{ color: '#666', my: 5 }}>
                    Search GitHub Repositories
                </Typography>
                <Typography align="center" variant="h5" component="h3" sx={{ color: '#666', my: 5 }}>
                    1.Choose The Technology
                    <Typography variant="h6" component="span" sx={{ color: '#f00', ml: 1 }}>
                        *
                    </Typography>
                </Typography>

                <LanguageList currentLanguage={currentLanguage} handleChangeLanguage={handleChangeLanguage} />

                <Typography align="center" variant="h5" component="h3" sx={{ color: '#666', my: 5 }}>
                    2.Free Keyword
                    <Typography variant="h6" component="span" sx={{ color: '#f00', ml: 1 }}>
                        *
                    </Typography>
                </Typography>

                <KeywordForm
                    isLoading={isLoading}
                    keyword={keyword}
                    handleChangeKeyword={handleChangeKeyword}
                    handleSubmit={handleSubmit}
                />
                {isLoading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', m: 5 }}>
                        <CircularProgress />
                    </Box>
                ) : repositories.items.length === 0 ? (
                    'No Result'
                ) : (
                    <>
                        <Sort sort={sort} handleChangeSort={handleChangeSort} />
                        <Pager totalCount={repositories.totalCount} page={page} handleChangePage={handleChangePage} />
                        <RepositoryList items={repositories.items} />
                    </>
                )}
            </Container>
            <FloatButton />
        </>
    )
}

export default Top
