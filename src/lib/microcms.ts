import { createClient } from 'microcms-js-sdk'

function getClient() {
  let serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN
  const apiKey = process.env.MICROCMS_API_KEY

  if (!serviceDomain) {
    throw new Error(
      'MICROCMS_SERVICE_DOMAIN environment variable is not set. ' +
      'Please add it to your .env.local file. ' +
      `Current value: ${serviceDomain}`
    )
  }

  if (!apiKey) {
    throw new Error(
      'MICROCMS_API_KEY environment variable is not set. ' +
      'Please add it to your .env.local file. ' +
      `Current value: ${apiKey ? '***' : 'undefined'}`
    )
  }

  // Clean up service domain - remove https://, http://, and .microcms.io if present
  serviceDomain = serviceDomain.trim()
  serviceDomain = serviceDomain.replace(/^https?:\/\//, '')
  serviceDomain = serviceDomain.replace(/\.microcms\.io.*$/, '')
  serviceDomain = serviceDomain.split('/')[0] // Remove any path

  return createClient({
    serviceDomain,
    apiKey,
  })
}

export const client = getClient()