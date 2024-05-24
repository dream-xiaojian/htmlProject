export interface result<T>{
    code: number
    message: string
    data: T
}

export interface imagesTable {

}

export interface blogSharesTable {
    /**
     * 标题
     */
    title: string

    /**
     * 内容
     */
    content: string

    /**
     * 是否公开
     */
    visible: number

    /**
     * 图片数据
     */
    imagesData: string[]

    /**
     * 作者
     */
    author: string

    /**
     * 发布时间
     */
    date: string

    /**
     * 地点
     */
    place: string

    /**
     * 点赞列表
     */
    likeList: number[]

    /**
     * 评论列表
     */
    commentList: number[]
}