#!/usr/bin/env node
'use strict'

import commander from 'commander'
import pkg from '../package.json'
import init from './commands/init'
import type { Option } from './types'

const program = new commander.Command()

program
  .name(pkg.name)
  .description(pkg.description)
  .version(pkg.version)
  .option('--monorepo', 'create a monorepo lib project')
  .action((options: Option) => {
    init(options)
  })

program.parse()
