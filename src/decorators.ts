export function sealed(param: string) {
    return function (target: Function): void {
        console.log(`Sealing the constructor ${param}`);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
    const newConstructor: Function = function () {
        console.log('Creating new instance');
        console.log(target.name);

        this.age = 30;
    };

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;

    newConstructor.prototype.printLibrarian = function () {
        console.log(`Librarian name:  ${this.name}, Librarian age: ${this.age}`);
    };

    return newConstructor as TFunction;
}

export function writable(isWritable: boolean) {
    return function (target: Object, methodName: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(methodName);

        descriptor.writable = isWritable;
    }
}

export function timeout(ms: number = 0) {
    return function (target: Object, methodName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms)
        };

        return descriptor;
    }
}
