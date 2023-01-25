import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    core.setOutput('release-url', 'https://example.com')
  } catch (error: any) {
    core.setFailed(error.message)
  }
}

run()

export { run as run };