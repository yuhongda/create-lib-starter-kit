'use strict'

import type { Option } from '../types'
import prompts from 'prompts'
import chalk from 'chalk'
import fs from 'fs-extra'
import path from 'path'
import ora from 'ora'
import { Octokit, App } from 'octokit'

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

  const { libName, template } = response

  try {
    await fs.copy(path.resolve(`./templates/${template}`), path.resolve(`./${libName}`))
  } catch (err) {
    console.error(err)
    process.exit(1)
  }

  const responseForGitHub = await prompts([
    {
      type: 'confirm',
      name: 'value',
      message: 'If you want to create a GitHub Repository?',
      initial: true
    },
    {
      type: (prev) => (prev === true ? 'text' : null),
      name: 'token',
      message: 'Type your GitHub Personal access token: '
    },
    {
      type: 'text',
      name: 'org',
      message: 'Type your GitHub Organization: '
    }
  ])

  const { token, org } = responseForGitHub
  if (token) {
    const octokit = new Octokit({ auth: token })
    const {
      data: { login }
    } = await octokit.rest.users.getAuthenticated()
    console.log('Hello, %s', login)
    octokit.rest.repos.createInOrg({ org, name: libName, auto_init: true })
  }
}

export default init
