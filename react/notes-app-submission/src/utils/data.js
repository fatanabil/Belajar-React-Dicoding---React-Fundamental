const getNote = () => {
    return [
        {
            id: 1,
            title: "Babel",
            body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
            archived: false,
            createdAt: '2022-04-14T04:27:34.572Z'
        },
        {
            id: 2,
            title: "Lorem Ipsum",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quo dolore inventore quae suscipit debitis libero ea error sequi nostrum?",
            archived: false,
            createdAt: '2022-04-14T04:27:34.572Z'
        },
        {
            id: 3,
            title: "Dicoding",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quo dolore inventore quae suscipit debitis libero ea error sequi nostrum?",
            archived: true,
            createdAt: '2022-04-14T04:27:34.572Z'
        },
        {
            id: 4,
            title: "Indonesia",
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus quo dolore inventore quae suscipit debitis libero ea error sequi nostrum?",
            archived: true,
            createdAt: '2022-04-14T04:27:34.572Z'
        },
    ]
};

export default getNote;