import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { archiveNote, deleteNote, unarchiveNote } from '../utils/local-data';
import ArchiveButton from './ArchiveButton';
import BackButton from './BackButton';
import DeleteButton from './DeleteButton';
import UnarchiveButton from './UnarchiveButton';

function CatatanDetail({ id, title, body, archived, createdAt }) {
    const navigate = useNavigate();
    const timeStampOpt = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'shortGeneric' };
    const parsedDate = new Date(createdAt).toLocaleString('id-ID', timeStampOpt);

    function onDeleteCatatan() {
        deleteNote(id);
        if (archived) {
            return navigate('/archive');
        }
        return navigate('/');
    }

    function onArchiveCatatan() {
        archiveNote(id);
        if (archived) {
            return navigate('/archive');
        }
        return navigate('/');
    }

    function onUnarchiveCatatan() {
        unarchiveNote(id);
        if (archived) {
            return navigate('/archive');
        }
        return navigate('/');
    }

    return (
        <>
            <BackButton target={archived ? '/archive' : '/'} >Kembali</BackButton>
            <div className='flex flex-col'>
                <header className='mt-8'>
                    <h1 className='text-5xl'>{title}</h1>
                    <p className='text-slate-400 mb-4 mt-4'>{parsedDate}</p>
                </header>
                <main>
                    <p>{body}</p>
                </main>
                <div className='flex self-end mt-24 gap-4'>
                    {archived ? <UnarchiveButton onUnarchive={onUnarchiveCatatan} /> : <ArchiveButton onArchive={onArchiveCatatan} />}
                    <DeleteButton onDelete={onDeleteCatatan} />
                </div>
            </div>
        </>
    )
}

CatatanDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
}

export default CatatanDetail;