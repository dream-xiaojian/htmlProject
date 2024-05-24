export interface result<T>{
    code: number
    message: string
    data: T
}

export interface imagesTable {
    
}

export interface blogSharesTable {
    title: string
    content: string
    imagesData: string[]
    author: string
    date: string
    place: string
    likeList: number[]
    commentList: number[]
}