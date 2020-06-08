import fs from 'fs'
import { fromNullable, tryCatch } from './either'

const renderPage = (user) => `renderPage(${user})`
const showLogin = () => 'showLogin()'

export const openSite1 = (currentUser) => {
  if (currentUser) {
    return renderPage(currentUser)
  } else {
    return showLogin()
  }
}

export const openSite2 = (currentUser) => (
  currentUser
    ? renderPage(currentUser)
    : showLogin()
)

export const openSiteFunc = (currentUser) => (
  fromNullable(currentUser)
    .fold(showLogin, renderPage)
)

// ---------------------------------------------------------------------------

export const streetName = user => {
  const address = user.address
  if (address) {
    const street = address.street
    if (street) {
      const name = street.name
      if (name) {
        return name
      }
    }
  }
  return 'no street'
}

export const streetNameFunc = user => {
  fromNullable(user.address)
    .map(address => address.street)
    .chain(street => fromNullable(street))
    .fold(() => 'no street', street => street.name)
}

// ---------------------------------------------------------------------------

export const concatUniq = (x, ys) => {
  const found = ys.filter(y => y === x)[0]
  return found ? ys : ys.concat(x)
}

export const concatUniqFunc = (x, ys) =>
  fromNullable(ys.filter(y => y === x)[0])
    .fold(() => ys.concat(x), ys)

// ---------------------------------------------------------------------------

export const wrapExamples = example => {
  if (example.previewPath) {
    try {
      example.preview = fs.readFileSync(example.previewPath)
    }
    catch (e) { }
  }
  return example
}

export const readFile = (path) => tryCatch(() => fs.readFileSync(path))

export const wrapExamplesFunc = example =>
  fromNullable(example.previewPath)
    .chain(readFile)
    .fold(() => example, ex => Object.assign({ preview: example.previewPath }, ex))
