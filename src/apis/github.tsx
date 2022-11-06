import axios from 'axios'

export const searchRepositories = async (keyword: string, language: Language, sort: string, page: number) => {
    try {
        const response = await axios.get(
            `https://api.github.com/search/repositories?q=${language.keyword}+${keyword}&per_page=100&page=${page}${
                sort ? `&sort=${sort}&order=desc` : ''
            }`
        )
        const totalCount: number = response.data.total_count

        const items: Repository[] = response.data.items.map((item: any) => ({
            id: item.id,
            full_name: item.full_name,
            avatar_url: item.owner.avatar_url,
            html_url: item.html_url,
            description: item.description,
            stargazers_count: item.stargazers_count,
            forks_count: item.forks_count,
        }))

        return { totalCount, items }
    } catch (error) {
        throw error
    }
}
