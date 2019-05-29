export default function modifyEslintConfig(api, opts) {
  api.chainWebpackConfig((memo) => {
    memo.module
      .rule('eslint')
      .use('eslint-loader')
      .tap(options => ({
        ...options,
        ...opts,
      }))
  })
}
