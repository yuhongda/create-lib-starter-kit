'use strict'

import type { Option } from '../types'
import prompts from 'prompts'
import chalk from 'chalk'
import fs, { readFile } from 'fs-extra'
import path from 'path'
import ora from 'ora'
import { Octokit } from 'octokit'
import { execSync } from 'child_process'
import simpleGit from 'simple-git'

const init = async (options: Option) => {
  const { libName, template } = await prompts([
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
        { title: 'monorepo-vue-ts', value: 'monorepo-vue-ts' },
        { title: 'chart-component', value: 'chart-component' }
      ]
    }
  ])

  try {
    await fs.copy(
      path.resolve(__dirname, `../../templates/${template}`),
      path.resolve(`./${libName}`)
    )
  } catch (err) {
    console.error(err)
    process.exit(1)
  }

  const { token } = await prompts([
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
    }
  ])

  if (token) {
    const octokit = new Octokit({ auth: token })
    const spinner = ora({
      color: 'green'
    })
    // login to GitHub
    spinner.text = '🧑‍💻 Login to GitHub...'
    spinner.start()
    const {
      data: { login }
    } = await octokit.rest.users.getAuthenticated()
    console.log('👋 Hello, %s', login)

    // create repo
    spinner.text = '🛠 Creating Repo...'
    const {
      data: { clone_url }
    } = await octokit.rest.repos.createForAuthenticatedUser({
      name: libName,
      private: true,
      auto_init: true
    })

    spinner.text = '🛠 Init local Repo...'
    await simpleGit(`./${libName}`)
      .init()
      .addRemote('origin', clone_url)
      .pull('origin', 'main', { '--rebase': 'true' })
    spinner.stop()
  }

  // open in vscode
  const { openInVSCode } = await prompts([
    {
      type: 'confirm',
      name: 'openInVSCode',
      message: 'Wanna open in VSCode?',
      initial: true
    }
  ])
  if (openInVSCode) {
    execSync(`code ./${libName}`)
  }
}

export default init
