import PropTypes from 'prop-types';

function CatatanBody({ body }) {
    return (
        <main>
            <p className='line-clamp-5 text-ellipsis break-words'>
                {body}
            </p>
        </main>
    )
}

CatatanBody.propTypes = {
    body: PropTypes.string.isRequired,
}

export default CatatanBody;