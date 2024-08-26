import { useParams } from "react-router-dom";
import CatatanDetail from "../components/CatatanDetail";
import { getNote } from "../utils/local-data";

function DetailPage() {
    const { id } = useParams();
    const catatan = getNote(id);

    return (
        <div className="px-16 py-8">
            {catatan ? (
                <CatatanDetail {...catatan} />
            ) : (
                <h1 className="text-2xl text-slate-400 text-center">Catatan tidak ditemukan</h1>
            )}
        </div>
    )
}

export default DetailPage;