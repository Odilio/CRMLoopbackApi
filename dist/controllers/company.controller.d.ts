import { Count, Filter, Where } from '@loopback/repository';
import { Company } from '../models';
import { CompanyRepository } from '../repositories';
export declare class CompanyController {
    companyRepository: CompanyRepository;
    constructor(companyRepository: CompanyRepository);
    create(company: Company): Promise<Company>;
    count(where?: Where<Company>): Promise<Count>;
    find(filter?: Filter<Company>): Promise<Company[]>;
    updateAll(company: Company, where?: Where<Company>): Promise<Count>;
    findById(id: number): Promise<Company>;
    updateById(id: number, company: Company): Promise<void>;
    replaceById(id: number, company: Company): Promise<void>;
    deleteById(id: number): Promise<void>;
}
