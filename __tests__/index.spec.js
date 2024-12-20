import config from '@'
import { expect, test } from 'vitest'

test('package index returns prettier config object', () => {
    expect(config).toBeTypeOf('object')
})
