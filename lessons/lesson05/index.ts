import { fromNullable, tryCatch } from './either';
import * as fs from 'fs';

// const openSite = () => {
//   if(current_user) {
//     return renderPage(current_user)
//   } else {
//     return showLogin()
//   }
// }

// const openSiteFunc = () =>
//   fromNullable(current_user).fold(showLogin, renderPage)
 
 // ----

//  const getPrefs = (user) => {
//    if(user.premium) {
//      return loadPrefs(user.preferences)
//    } else {
//      return defaultPrefs;
//    }
//  }

//  const getPrefsFunc = (user) => 
//   fromNullable(user.premium)
//     .map(u => u.preferences)
//     .fold(() => defaultPrefs, (prefs) => loadPrefs(preferences))

// ----

const streetName = user => {
  const address = user.address

  if(address) {
    const street = address.street
    if(street) {
      return street.name
    }
  }
  return 'no street'
}

const streetNameFunc = user => {
  fromNullable(user.address)
    .map(address => address.street)
    .chain(street => fromNullable(street))
    .fold(() => 'no street', street => street.name)
}

// ----

const concatUniq = (x, ys) => {
  const found = ys.filter(y => y === x)[0]
  return found ? ys : ys.concat(x)
}

const concatUniqFunc = (x, ys) => 
  fromNullable(ys.filter(y => y === x)[0])
    .fold(() => ys.concat(x), ys)

// ----

const wrapExamples = example => {
  if(example.previewPath) {
    try {
      example.preview = fs.readFileSync(example.previewPath)
    } catch(e) {}
  }
  return example;
}

const readFile = (path) => tryCatch(() => fs.readFileSync(path))

const wrapExamplesFunc = example => 
  fromNullable(example.previewPath)
    .chain(readFile)
    .fold(() => example, ex => Object.assign({preview: example.previewPath}, ex))
