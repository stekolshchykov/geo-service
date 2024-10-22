import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

export default {
    input: 'src/server.ts',
    output: {
        dir: 'dist',
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [
        resolve(),
        commonjs(),  // Включите поддержку CommonJS модулей
        typescript({
            tsconfig: './tsconfig.json',
        }),
        json(),
        terser(),
        copy({
            targets: [
                { src: 'src/data/*.dat', dest: 'dist/data' },
            ]
        })
    ],
    external: ['express', 'fs', 'path', 'dotenv'] // Не бандлить dotenv
};