/**
 * The following is merely a 'demo' pipe to serve as example of how to build additional Angular Pipes
 */
import { Pipe, PipeTransform } from '@angular/core';

const currencies = [
    {name: 'euro', sign: '€'},
    {name: 'dollar', sign: '$'}
]

@Pipe({
  name: 'AmountWithCurrency'
})

export class AmountWithCurrency implements PipeTransform {
    // example input -> AmountWithCurrency(10, 'dollar);
    // expected output -> '10$';
    transform(amount: number, currency: string) {
        const targetCurrency = currencies.find(elem => elem.name === currency)
        return `${amount} ${targetCurrency?.sign}`
    }
}
