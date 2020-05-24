import { Sum} from '../lesson06/sum';
import { First, All } from '../lesson06/bool';
import { Map } from 'immutable';

namespace lesson08 {

  if(Sum.empty) {
    const res = Sum.empty().concat(Sum(1).concat(Sum(2)));
    console.log(res);
  }
}
