import * as core from '@actions/core'
import { getCreatedTag } from './event';
import * as version from './version';

async function run(): Promise<void> {
  try {
    const tag = event.getCreatedTag()

    if (tag && version.isSemVer(tag)) {

    }

    core.setOutput('release-url', 'https://example.com')
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()

export { run as run };