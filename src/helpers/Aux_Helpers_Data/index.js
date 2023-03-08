

export const countsRepeat = ( data ) => {
    const map = new Map()
    data.forEach(item => {
        !map.get(item['slug']) ? map.set(item['slug'], item) : map.get(item['slug']).count++
    })
    const res = Array.from(map.values()).sort((a, b) => b.count - a.count).slice( 0, 10 );
    return { res }
}

