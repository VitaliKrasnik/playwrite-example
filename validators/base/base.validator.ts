import { expect } from 'playwright/test';
import _ from 'lodash';

export class BaseValidator {
  
  assertTextEqual(actual: string, expected: string, msg: string): void {
    expect(actual, msg).toEqual(expected);
  }

  assertTextContains(actual: string, expected: string, msg: string): void {
    expect(actual, msg).toContain(expected);
  }

}