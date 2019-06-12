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

export function logParameter(target: Object, methodName: string, paramIndex: number) {
    console.log(target);
    console.log(methodName);
    console.log(paramIndex);

    const key = `${methodName}_decor_params_indexes`;
    if(Array.isArray(target[key])) {
        target[key].push(paramIndex);
    } else {
        target[key] = [paramIndex];
    }
}

export function logMethod(target: Object, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const key = `${methodName}_decor_params_indexes`;
        const indexes = target[key];

        if(Array.isArray(indexes)) {
            args.forEach((arg, idx )=> {
                if(indexes.indexOf(indexes) !== -1) {
                    console.log(`Method: ${methodName}, ParamIndex: ${idx}, ParamValue: ${arg}`);
                }
            });
        }

        const result = originalMethod.apply(this, args);
        return result;
    };

    return descriptor;
}
