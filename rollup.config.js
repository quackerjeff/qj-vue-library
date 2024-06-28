import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';

export default {
  input: 'src/form-components/index.js',
  output: {
    format: 'esm',
    file: 'dist/form-components/index.js',
    globals: {
      vue: 'Vue'
    }
  },
  external: ['vue'],
  plugins: [vue({
    css: false,
    compileTemplate: true
  }), resolve(),
  css({ output: 'bundle.css' })]
};
