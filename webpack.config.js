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
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'awesome-typescript-loader',
                    },
                ],
            },
        ],
    },
};
