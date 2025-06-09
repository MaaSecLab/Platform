export type BlogItem = {
    id: string
    title: string
    emoji: string
    date: string
    description: string
}

export type Announcement = {
    id: string
    title: string
    date: string
    description: string
}

export type User = {
    userid: string
    displayName: string
    password: BinaryType
}

export type Achievement = {
    achievementID: BigInt
    userID: string
    achievementProgress: BigInt
}

export type AchievementType = {
    achievementID: BigInt
    description: string
    difficulty: string
    totalProgress: BigInt
    name: String
}