let catatan = [
    {
        id: 1,
        title: 'Babel',
        body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
        archived: false,
        createdAt: '2022-04-14T04:27:34.572Z',
    },
    {
        id: 2,
        title: 'Testing',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, est quis. Corrupti, totam? Sapiente, maxime. Consectetur maxime, maiores quaerat nemo suscipit inventore ipsum accusamus repellat atque ab quo porro dolore!',
        archived: false,
        createdAt: '2022-04-14T04:27:34.572Z',
    },
    {
        id: 3,
        title: 'Testing 2',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, molestias. Harum cupiditate mollitia, ab corrupti doloremque earum laudantium tempore optio alias ex labore ducimus et eveniet deleniti perspiciatis, temporibus quaerat vel officiis porro adipisci vero nisi velit commodi? Sequi harum expedita reprehenderit nulla rerum laboriosam provident reiciendis vero cum voluptates!',
        archived: false,
        createdAt: '2022-04-14T04:27:34.572Z',
    },
    {
        id: 4,
        title: 'Testing 3',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, molestias. Harum cupiditate mollitia, ab corrupti doloremque earum laudantium tempore optio alias ex labore ducimus et eveniet deleniti perspiciatis, temporibus quaerat vel officiis porro adipisci vero nisi velit commodi? Sequi harum expedita reprehenderit nulla rerum laboriosam provident reiciendis vero cum voluptates!',
        archived: true,
        createdAt: '2022-04-14T04:27:34.572Z',
    },
    {
        id: 5,
        title: 'Testing 4',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, molestias. Harum cupiditate mollitia, ab corrupti doloremque earum laudantium tempore optio alias ex labore ducimus et eveniet deleniti perspiciatis, temporibus quaerat vel officiis porro adipisci vero nisi velit commodi? Sequi harum expedita reprehenderit nulla rerum laboriosam provident reiciendis vero cum voluptates!',
        archived: true,
        createdAt: '2022-04-14T04:27:34.572Z',
    },
];

function getCatatan() {
    return catatan;
}

function getCatatanAktif() {
    const activeNotes = catatan.filter(ctn => ctn.archived === false)
    return activeNotes;
}

function getCatatanArsip() {
    const archivedNotes = catatan.filter(ctn => ctn.archived === true)
    return archivedNotes;
}

function getCatatanById(id) {
    const ctn = catatan.filter(ctn => ctn.id === id);
    return ctn[0];
}

function addCatatan(ctn) {
    catatan = [...catatan, { id: new Date().getTime(), ...ctn }]
}

function archiveCatatan(id) {
    catatan = catatan.map(ctn => {
        if (ctn.id === id) {
            return { ...ctn, archived: true }
        }

        return ctn
    })
}

function unarchiveCatatan(id) {
    catatan = catatan.map(ctn => {
        if (ctn.id === id) {
            return { ...ctn, archived: false }
        }

        return ctn
    })
}

function deleteCatatan(id) {
    catatan = catatan.filter((ctn) => ctn.id !== id);
}

export { getCatatan, getCatatanAktif, getCatatanArsip, getCatatanById, addCatatan, archiveCatatan, unarchiveCatatan, deleteCatatan };