/**
 * 字母
 */
export interface Letter {
  letter: string;
  pos: number;
}

/**
 * 当前的状态
 */
export interface State {
  score: number;
  letters: Letter[];
  level: number;
}
