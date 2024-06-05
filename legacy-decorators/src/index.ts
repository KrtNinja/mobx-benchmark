import { action, makeObservable, observable } from "mobx"

class Parent {
  @observable
  prop1 = 0
  prop2 = ''
  @observable
  propSubClass: Child[] = []

  constructor() {
    makeObservable(this)
    for (let i = 0; i < 20; i++) {
      this.propSubClass.push(new Child())
    }
  }
}

class Child {
  @observable
  prop1 = 0
  @observable
  prop2 = ''
  prop3 = true

  constructor() {
    makeObservable(this)

  }

  @action
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