import { fetchWithToken } from "./authAPI";

async function addNote({ title, body }) {
    const response = await fetchWithToken(`/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function getActiveNotes() {
    const response = await fetchWithToken('/notes');
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function getArchivedNotes() {
    const response = await fetchWithToken('/notes/archived');
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function getNote(noteId) {
    const response = await fetchWithToken(`/notes/${noteId}`);
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: false };
    }

    return { error: false, data: responseJson.data };
}

async function archiveNote(noteId) {
    const response = await fetchWithToken(`/notes/${noteId}/archive`, {
        method: 'POST',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function unarchiveNote(noteId) {
    const response = await fetchWithToken(`/notes/${noteId}/unarchive`, {
        method: 'POST',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function deleteNote(noteId) {
    const response = await fetchWithToken(`/notes/${noteId}`, {
        method: 'DELETE',
    });
    const responseJson = await response.json();

    if (responseJson.status !== 'success') {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

export { addNote, getActiveNotes, getArchivedNotes, getNote, archiveNote, unarchiveNote, deleteNote };