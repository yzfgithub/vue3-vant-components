import resolve from '@rollup/plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import babel from '@rollup/plugin-babel'
import vue from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/y-vant-component.js',
        format: 'cjs',
        name: 'ehr-component'
    },
    plugins: [
        vue({
            preprocessStyles: true,
            css: true,
            compleTemplate: true
        }),
        postcss(),
        babel({
            exclude: 'node_modules/**',
        }),
        resolve(),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        commonjs(),
        image(),
    ],
    external: ['vue']
}