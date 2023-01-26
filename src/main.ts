import * as core from '@actions/core'
import { getCreatedTag } from './event';
import * as version from './version';
import * as git from './git'
import * as github from './github'

export async function run(): Promise<void> {
  try {
    const token = core.getInput('repo-token')
    const tag = getCreatedTag()
    var releaseUrl = ''

    if (tag && version.isSemVer(tag)) {
      const changelog = await git.getChangesIntroducedByTag(tag)
      releaseUrl = await github.createReleaseDraft(tag, token, changelog)
    }

    core.setOutput('release-url', releaseUrl)
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()