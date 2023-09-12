import { v4 as uuidv4 } from 'uuid';

// Defina uma interface para a estratégia de cálculo de imposto
interface TaxCalculationStrategy {
  calculateTax(price: number): number;
}

// Implemente classes concretas para cada estratégia de cálculo de imposto
class ProductTaxStrategy implements TaxCalculationStrategy {
  calculateTax(price: number): number {
    return price * 0.1; // 10% de imposto sobre produtos
  }
}

class ServiceTaxStrategy implements TaxCalculationStrategy {
  calculateTax(price: number): number {
    return price * 0.075; // 7,5% de imposto sobre serviços
  }
}

class RentalTaxStrategy implements TaxCalculationStrategy {
  calculateTax(price: number): number {
    return price * 0.05; // 5% de imposto sobre locações
  }
}

export default class OrderItem {
  id: string;
  description: string;
  price: number;
  type: 'product' | 'service' | 'rental';
  taxStrategy: TaxCalculationStrategy; // Implementa a estratégia de cálculo de imposto

  constructor(orderItem: OrderItem) {
    this.id = uuidv4();
    this.description = orderItem.description;
    this.price = orderItem.price;
    this.type = orderItem.type;

    // Configura a estratégia de cálculo de imposto com base no tipo
    switch (this.type) {
      case 'product':
        this.taxStrategy = new ProductTaxStrategy();
        break;
      case 'service':
        this.taxStrategy = new ServiceTaxStrategy();
        break;
      case 'rental':
        this.taxStrategy = new RentalTaxStrategy();
        break;
      default:
        throw new Error(`Tipo de item desconhecido: ${orderItem.type}`);
    }
  }

  calculateTax(): number {
    return this.taxStrategy.calculateTax(this.price);
  }
}
