export function moviesList() {
    return  {
        type: "MOVIES_LIST",
        payload: [
            {
                id: "1",
                name: "Bulb fiction"
            },
            {
                id: "2",
                name: "Arctic Rim"
            },
            {
                id: "3",
                name: "Tombo"
            }
        ]
    }
}