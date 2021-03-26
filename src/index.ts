import { Command, flags } from '@oclif/command'
import simpleGit, { SimpleGit } from 'simple-git';
const git: SimpleGit = simpleGit();

class Saj extends Command {
  static description = 'describe the command here'

  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    name: flags.string({ char: 'n', description: 'name to print' }),
    force: flags.boolean({ char: 'f' }),
    custom: flags.string({ char: 'c', description: 'test flag' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Saj)
    const name = flags.name ?? 'world'
    const custom = flags.custom

    if (flags.custom) {
      this.log(`custom input ${custom}`)
      git.checkIsRepo()
        .then(isRepo => console.log(isRepo));
    }
  }
}

export = Saj
