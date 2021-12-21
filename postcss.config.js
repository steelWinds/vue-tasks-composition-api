module.exports = (ext) => ({
    plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        'postcss-nested': {},
        tailwindcss: {},
        autoprefixer: {},
        cssnano: ext.env === 'production' ? {
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true
                    }
                }
            ] 
        } : false
    }
});
