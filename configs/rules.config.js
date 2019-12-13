const autoprefixer = require('autoprefixer')

const rules = [
    {
        exclude: /node_modules/,
        test: /\.(scss)$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        autoprefixer({
                            grid: 'autoplace'
                        })
                    ]
                }
            },
            'sass-loader'
        ]
    },
    {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }
]

// eslint-disable-next-line import/no-commonjs
module.exports = { rules }
