export type OnlyNext<T> = {
    previous: null
    next: T
}

export type OnlyPrevious<T> = {
    previous: T
    next: null
}

export type Both<T> = {
    previous: T
    next: T
}

export type Pagination<T> = OnlyNext<T> | OnlyPrevious<T> | Both<T>

export type PokemonModel = {
    count: number
    results: Array<{
        name: string
        url: string
    }>
} & Pagination<string>
