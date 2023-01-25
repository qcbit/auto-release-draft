import * as core from '@actions/core'
import * as github from '@actions/github'

export function getCreatedTag(): string | null {
    if (github.context.eventName != 'create') {
        core.info(`The event name is ${github.context.eventName}`)
        return null
    }

    if (github.context.payload.ref_type != 'tag') {
        core.info('The created reference is a branch')
        return null
    }

    return github.context.payload.ref
}