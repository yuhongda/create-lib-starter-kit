'use strict'

import type { Option } from '../types'
import prompts from 'prompts'
import chalk from 'chalk'
import fs from 'fs-extra'
import path from 'path'
import ora from 'ora'

const init = async (options: Option) => {
  const response = await prompts([
    {
      type: 'text',
      name: 'libName',
      message: 'Name your lib: ',
      validate: (value) =>
        !/[\w\.@\:\/\-~]+/.test(value)
          ? `only support: ${chalk.green('word, @, :, /, -, ~')}`
          : true
    },
    {
      type: 'select',
      name: 'template',
      message: 'Choose a template: ',
      choices: [
        { title: 'monorepo-react-ts', value: 'monorepo-react-ts' },
        { title: 'monorepo-vue-ts', value: 'monorepo-vue-ts' }
      ]
    }
  ])
  console.log(`${response.libName} ${response.template} created!`)

  const {libName, template} = response

  try {

    await fs.copy(path.resolve(`./templates/${template}`), path.resolve(`./${libName}`))
  } catch (err) {
    console.error(err)
  }
}

export default init
