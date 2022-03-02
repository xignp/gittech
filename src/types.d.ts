type Language = {
    id: number
    keyword: string
    class: string
}

type Repositories = {
    totalCount: number
    items: Repository[]
}

type Repository = {
    id: number
    full_name: string
    avatar_url: string
    html_url: string
    description: string
    stargazers_count: number
    forks_count: number
}

type Searched = {
    keyword: string
    currentLanguage: Language
    sort: string
}
