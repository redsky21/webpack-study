module.exports = {
    // plugins: [
    //     "@babel/plugin-transform-block-scoping",
    //     "@babel/plugin-transform-arrow-functions",
    //     "@babel/plugin-transform-strict-mode",
    // ]
    presets: [
        ['@babel/preset-env', {
            targets: {
                chrome: '79',
                ie: '11'
            },

            useBuiltIns: "usage", // 폴리필 사용 방식 지정
            corejs: {
                // 폴리필 버전 지정
                version: 2,
            },

        }]


    ]
}