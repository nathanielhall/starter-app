module.exports = (api) => {
  const isTest = api.env('test')

  api.cache(true)

  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['last 2 versions']
          },
          modules: isTest ? 'commonjs' : false
        }
      ]
    ]
  }
}
