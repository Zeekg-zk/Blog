// https://github.com/seognil-study/learning-by-doing/tree/master/rxjs/alphabet-game
// https://stackblitz.com/edit/rxjslc-alphabet-game

import { fromEvent, interval, merge, Subject } from "rxjs";
import {
  map,
  scan,
  share,
  startWith,
  switchMap,
  takeWhile,
  withLatestFrom,
} from "rxjs/operators";
