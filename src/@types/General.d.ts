declare interface IPaginationQueryParams {
    page?: number;
    limit?: number;
}

declare interface ISortQueryParams {
    sortField?: string;
    sortType?: 'asc' | 'desc';
}

declare interface IFilterQueryParams {
    field: string;
    operator?: IFilterOperator;
    method?: IFilterMethod;
    value?: string | number | boolean | Array<string | number | boolean> | null;
    type?: 'string' | 'number' | 'date' | 'boolean';
}

declare type IFilterMethod = 'regex' | 'is' | 'in' | 'gt' | 'lt' | 'gte' | 'lte';

declare type IFilterOperator = 'or' | 'and';
