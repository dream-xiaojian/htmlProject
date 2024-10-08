export interface result<T>{
    code: number
    message: string
    data: T
}

export interface imagesTable {

}

export interface blogSharesTable {
    /**
     * 作品id
     */
    id?: number
    
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
    imagesDataList: number[]

    /**
     * 作者id
     */
    author: number

    /**
     * 发布时间
     */
    date: string

    /**
     * 地点
     */
    place: string

    /**
     * 该作品收到的点赞列表
     */
    likeList: number[]

    /**
     * 评论列表
     */
    commentList: commitType[]

    /**
     * 收藏列表
     * 存储用户id
     */
    collectList:number[]
}

export interface commitType {
    /**
     * 评论内容
     */
    content: string

    /**
     * 评论者id
     */
    userId: number

    /**
     * 评论时间
     */
    date: string
}

/**
 * 发送信息的在右边（ui层面来做）
 */
export interface ChatTable {
    /**
     * 唯一的id标识符
     */
    id?: number

    /**
     * 聊天双方的用户id
     * -1表示人工智能
     */
    bothId: number[]

    /**
     * 消息体
     */
    chatBody: ChatBodyType[]
}

export interface ChatBodyType {
    /**
     * 发送方id
     */
    senderId: number

    /**
     * 时间
     */
    data: string

    /**
     * 内容
     */
    content: string
}