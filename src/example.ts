// declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

// function logMethod(name: string) {
//   return (target: any, key: string | symbol, descriptor: any): any => {
//     return {
//       ...descriptor,
//       value: (...args: any[]) => {
//         console.log(`${name} -->`, args)
//         const argsStr: string = args.map((value: any) => JSON.stringify(value))
//           .join();
//         const result: any = descriptor.value(args);
//         console.log(`${name} --> result:`, result);
//         const stringResult: string = JSON.stringify(result);
//         console.log(`${name} --> Call: ${key}(${argsStr}) => ${stringResult}`);
//         return result;
//       }
//     };
//   };
// }
//
// class MathLib {
//   @logMethod('Logger 1')
//   @logMethod('Logger 2')
//   @logMethod('Logger 3')
//   public areaOfCircle(r: number): number {
//     return Math.PI * r ** 2;
//   }
// }
//
// const math: MathLib = new MathLib();
// math.areaOfCircle(9);
// math.areaOfCircle(100);
// math.areaOfCircle(1);

// @logClass
// class User {
//   public constructor(
//     public firstName: string,
//     public lastName: string,
//   ) {}
// }
//
// function logClass(target: any): any {
//   return () => {
//     console.log(`New instance of ${target.name}`);
//     return target;
//   };
// }
//
// let person1: User = new User('Igor', 'Nepipenko');
// let person2: User = new User('Vova', 'Loban');

// function logProp(target: any, key: string): void {
//
//   let val: any = target[key];
//
//   const get: () => typeof val = (): typeof val => {
//     console.log(`Get: ${key} => ${JSON.stringify(val)}`);
//     return val;
//   };
//   const set: (newVal: any) => void= (newVal: any): void => {
//     console.log(`Set: ${key} => ${JSON.stringify(newVal)}`);
//     val = newVal;
//   };
//
//   Object.defineProperty(target, key, {
//     get,
//     set
//   });
// }
//
// class Person {
//   @logProp
//   public firstName: string;
//   public lastName: string;
//
//   public constructor(
//     firstName: string,
//     lastName: string,
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
//
// const me: Person = new Person('Igor', 'Nepipenko');
// const myName: string = me.firstName;
// me.firstName = 'Vlad';
// const newName: string = me.firstName;

type HashMap<T> = { [key: string]: T };

const a: HashMap<string> = {
  name: 'Igor',
  age: '31'
};

const b: HashMap<() => any> = {
  getName: () => {
    return 'Igor';
  }
};

interface IName {
  name: string;
}

interface IAge {
  age: number;
}

interface IPerson extends IName, IAge {}

export abstract class AbsPerson {

  public constructor(
    public name: string
  ) {

  }

  public abstract getSalary(value: number): number;

  public getName(): string {
    return name;
  }
}

export class JSPerson extends AbsPerson {
  public getSalary(value: number): number {
    return value * 10;
  }
}
export class JavaPerson extends AbsPerson {
  public getSalary(value: number): number {
    return value * 2;
  }
}
