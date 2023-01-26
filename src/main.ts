import * as core from '@actions/core'
import { getCreatedTag } from './event';
import * as version from './version';
import * as git from './git'

async function run(): Promise<void> {
  try {
    const tag = event.getCreatedTag()

    if (tag && version.isSemVer(tag)) {
      const changelog = await git.getChangesIntroducedByTag(tag)
    }

    core.setOutput('release-url', 'https://example.com')
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()

export { run as run };