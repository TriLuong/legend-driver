module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src/'],
          alias: {
            '@Assets': './src/Assets',
            '@Store': './src/Store',
            '@Components': './src/Components',
            '@Utils': './src/Utils'
          }
        }
      ]
    ]
  }
}
