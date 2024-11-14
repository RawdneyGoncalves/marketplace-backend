export interface ICategoryRepository {
    findAll(): Promise<any[]>;
    findById(id: number): Promise<any | null>;
    create(data: Partial<any>): Promise<any>;
    update(id: number, data: Partial<any>): Promise<any>;
    delete(id: number): Promise<void>;
  }