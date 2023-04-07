export class Product {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly url: string,
    readonly description: string,
  ) {}
}
