module.exports = {
    filename: '_smart-grid',
    outputStyle: 'scss',
    columns: 12,
    offset: '20px',
    mobileFirst: false,
    container: {
        maxWidth: '1200px',
        fields: '20px',
    },
    breakPoints: {
        lg: {
            width: '1366px' /* -> @media (max-width: 1100px) */,
        },
        md: {
            width: '1024px',
            // fields: '15px' /* set fields only if you want to change container.fields */
        },
        sm: {
            width: '768px',
        },
        xs: {
            width: '480px',
        },
        i8: {
            width: '414px',
        },
        i7: {
            width: '375px',
        },
        i5: {
            width: '320px',
        },
    },
};
