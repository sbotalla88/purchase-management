import { PaginateModel, FilterQuery, PaginateOptions } from 'mongoose';
import { Container } from 'typedi';
import { IFilterQueryParams, ISortQueryParams, ISortType } from '../types';
import { LogService } from '../helpers/logService';
export abstract class BaseService<T = any> {
    _modelName = '';
    _model: PaginateModel<T>;
    _sort: { [field: string]: ISortType };
    _logService: LogService;

    defaultModel?: PaginateModel<T>;
    constructor(name: string, defaultModel?: PaginateModel<T>) {
        this.defaultModel = defaultModel;
        this._modelName = name;
        this._model = this.getModel<T>(name);
        this._sort = { updatedAt: 'desc' };
        this._logService = new LogService(`SERVICE_${name}`);
    }

    /**
     * Returns Model Name
     *
     * @returns
     */
    getModelName = () => {
        return this._modelName;
    };

    /**
     * Returns the all results from DB
     *
     * @returns Result from DB - Array
     */
    getAll = async (): Promise<T[]> => {
        const result = await this._model.find();
        return result;
    };

    /**
     * Returns a result by Id
     *
     * @param id
     * @returns Result from DB - an object
     */
    getById = async (id: string): Promise<T | null> => {
        const result = await this._model.findById(id);
        return result;
    };

    /**
     * Returns the result from DB based on given condition
     *
     * @param where - object
     * @returns Result from DB - Array
     */
    getWhere = async (where: any = {}): Promise<T[]> => {
        const result = await this._model.find(where);
        return result;
    };

    /**
     * Returns mongoose Model set by Container
     *
     * @param modelName - string
     * @returns Model - mongoose Model
     */
    getModel = <ModelType>(modelName: string): PaginateModel<ModelType> => {
        try {
            return Container.get(`model.${modelName}`);
        } catch (error) {
            return this.defaultModel as any;
        }
    };

    generateSortQuery = (sorters: ISortQueryParams[] = [{ sortField: 'updatedAt', sortType: 'desc' }]) => {
        return (
            sorters?.reduce((acc: any, sorter) => {
                acc[sorter.sortField!] = sorter.sortType === 'asc' ? 1 : -1;
                return acc;
            }, {}) ?? {}
        );
    };

    generateFilterQuery = (filters: IFilterQueryParams[] = []) => {
        return (
            filters?.reduce((acc: any, filter) => {
                if (filter.type === 'number') {
                    if (filter.method === 'in') {
                        filter.value = [Number(filter.value)];
                    } else {
                        filter.value = Number(filter.value);
                    }
                }
                if (filter.type === 'string') {
                    if (filter.method === 'in') {
                        filter.value = [`${filter.value}`];
                    } else {
                        filter.value = `${filter.value}`;
                    }
                }

                if (filter.type === 'date') {
                    if (filter.method === 'in') {
                        filter.value = [new Date((filter?.value as string) ?? new Date())];
                    } else {
                        filter.value = new Date((filter?.value as string) ?? new Date());
                    }
                }

                let query = {};

                switch (filter.method) {
                    case 'gt':
                        query = {
                            ...query,
                            [filter.field]: {
                                $gt: filter.value,
                            },
                        };
                        break;
                    case 'lt':
                        query = {
                            ...query,
                            [filter.field]: {
                                $lt: filter.value,
                            },
                        };
                        break;
                    case 'gte':
                        query = {
                            ...query,
                            [filter.field]: {
                                $gte: filter.value,
                            },
                        };
                        break;
                    case 'lte':
                        query = {
                            ...query,
                            [filter.field]: {
                                $lte: filter.value,
                            },
                        };
                        break;
                    case 'regex':
                        query = {
                            ...query,
                            [filter.field]: {
                                $regex: `.*${filter.value}.*`,
                                $options: 'i',
                            },
                        };
                        break;
                    case 'in':
                        query = {
                            ...query,
                            [filter.field]: {
                                $in: filter.value,
                            },
                        };
                        break;
                    case 'ne':
                        query = {
                            ...query,
                            [filter.field]: {
                                $ne: filter.value,
                            },
                        };
                        break;
                    default:
                        query = {
                            ...query,
                            [filter.field]: filter.value,
                        };
                        break;
                }

                if (filter.operator === 'or') {
                    acc['$or'] = [...(acc?.['$or'] ?? []), query];
                } else {
                    acc = {
                        ...acc,
                        ...query,
                    };
                }

                return acc;
            }, {}) ?? {}
        );
    };
}
