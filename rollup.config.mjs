import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

const isDev = process.env.NODE_ENV === 'development';

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
            tsconfig: isDev ? 'tsconfig.dev.json' : 'tsconfig.prod.json',
            clean: true,
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
