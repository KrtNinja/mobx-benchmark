import { action, makeObservable, observable } from "mobx"

class Parent {
  @observable
  accessor prop1 = 0

  prop2 = ''

  @observable
  accessor propSubClass: Child[] = []

  constructor() {
    for (let i = 0; i < 20; i++) {
      this.propSubClass.push(new Child())
    }
  }
}

class Child {
  @observable
  accessor prop1 = 0

  @observable
  accessor prop2 = ''
  prop3 = true

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