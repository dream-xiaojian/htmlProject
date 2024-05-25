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
    imagesDataList: string[]

    /**
     * 作者id
     */
    author: number

    /**
     * 作者头像
     */
    headImageId: number

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