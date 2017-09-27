module.exports = {
    devtool: 'source-map',
    entry: {
        main: ['./test.ts'],
    },
    output: {
        path: `${__dirname}/target`,
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|tsx?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            // Enabling this will result in invalid source maps
                            useBabel: process.env.USE_BABEL === 'true',
                        },
                    },
                ],
            },
        ],
    },
};
