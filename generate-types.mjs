import * as fs from 'fs'
import { join } from 'path'
import pkg from 'jsonfile'
import { ensureDir } from 'fs-extra'
const { readFile, writeFile } = pkg

const fromModule = (p = '') => join('./node_modules/.generated', p)

await ensureDir(fromModule())

await writeFile(fromModule('package.json'), {
    name: 'generated',
    version: '0.0.0-generated',
    types: 'index.d.ts',
})

const projectName = await readFile('package.json').then(p => p.name)

// using ts-morph in
await fs.promises.writeFile(fromModule('index.d.ts'), `export type ProjectName = "${projectName}"`, '', 'utf-8')
