import { action, makeObservable, observable } from "mobx"

class Parent {
  prop1 = 0
  prop2 = ''
  propSubClass: Child[] = []

  constructor() {
    makeObservable(this, {
      prop1: observable,
      propSubClass: observable
    })
    for (let i = 0; i < 20; i++) {
      this.propSubClass.push(new Child())
    }
  }
}

class Child {
  prop1 = 0
  prop2 = ''
  prop3 = true

  constructor() {
    makeObservable(this, {
      prop1: observable,
      prop2: observable,
      setProp1: action
    })

  }

  setProp1(value: number = 1) {
    this.prop1 = value
    this.#updateSmth()
  }

  #updateSmth() {
    return true
  }
}

export function createLotClasses(count: number = 100) {
  const parents: Parent[] = [];
  for (let i = 0; i < count; i++) {
    parents.push(new Parent());
  }
  return parents;
}