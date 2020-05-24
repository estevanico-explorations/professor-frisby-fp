import {Sum} from '../lesson06/sum';
import { First, All } from '../lesson06/bool';
import { Map } from 'immutable';

namespace lesson07 {

  const acct1 = Map({ name: First('Nico'), isPaid: All(true), points: Sum(10), friends: ['Franklin']})

  const acct2 = Map({ name: First('Nico'), isPaid: All(false), points: Sum(2), friends: ['Gatsby']})

  const rest = acct1.concat(acct2)

  console.log(JSON.stringify(rest.toJS()))
}
