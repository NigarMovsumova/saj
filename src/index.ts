import { Command, flags } from '@oclif/command'
import simpleGit, { SimpleGit } from 'simple-git';
const git: SimpleGit = simpleGit();

class Saj extends Command {
  static flags = {
    version: flags.version({ char: 'v' }),
    help: flags.help({ char: 'h' }),
    name: flags.string({ char: 'n', description: 'name to print' }),
    force: flags.boolean({ char: 'f' }),
    custom: flags.string({ char: 'c', description: 'custom flag' }),
  }

  static args = [{ name: 'file' }]

  async run() {
    const { args, flags } = this.parse(Saj)
    const custom = flags.custom

    if (flags.custom) {
      this.log(`custom input ${custom}`)
      git.checkIsRepo()
        .then(isRepo => console.log(isRepo));
    }
  }
}

export = Saj
