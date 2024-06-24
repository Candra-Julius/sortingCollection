// module.exports = {
//     ignore: ['node_modules/**'],
//     presets: [
//       [
//         '@babel/preset-env',
//         {
//           modules: 'commonjs',
//           targets: { node: 'current' }
//         },
//       ],
//     ],
//     env: {
//       mjs: {
//         presets: [
//           [
//             '@babel/preset-env',
//             {
//               modules: false, 
//             },
//           ],
//         ],
//       },
//     },
//   }


  module.exports = {
    sourceMap: true,
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
          modules: "commonjs"
        },
      ],
    ],
    plugins: ['@babel/plugin-transform-modules-commonjs'],
    env: {
      esm: {
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
            },
          ],
        ],
      },
    },
  };