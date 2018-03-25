import { Injectable } from '@angular/core';

const SHIFT = 2;

export class GeneratorService {

  constructor(private length: number) { }

  getRandom(): string {
    return Math.random().toString(36).substring(SHIFT, this.length + SHIFT);
  }

}
