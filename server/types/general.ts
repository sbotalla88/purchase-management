import mongoose, { Document, PaginateResult } from 'mongoose';
import { Request, Response } from 'express';
import { IUser } from './user';
import { IAdminUser, IAdminUserJSON } from './adminUser';
import { RedisManager } from '../helpers';

export interface IBaseJsonResponse {
    status: number;
    message: string;
    name?: string;
}

export interface IJsonResponseError extends IBaseJsonResponse {}

export interface IJsonResponseSuccess<T = any> extends IBaseJsonResponse {
    data?: T;
}

export interface BaseModel extends Document {
    createdAt?: Date;
    updatedAt?: Date;
    CREATEDON?: Date;
    UPDATEDON?: Date;
}

export interface ExRequest extends Request {
    user?: IUser | IAdminUser;
    userId?: string;
    redis?: RedisManager;
}

export interface ExResponse extends Response {}

export type Optional<T> = { [P in keyof T]?: T[P] };

export type RedisKey = string | number | any;

export interface StatisticsRequestQuery {
    from: string;
    to: string;
    interval: string;
}

export interface StatisticsResponse<T = any> {
    from: string;
    to: string;
    data: T[];
}

export type StatisticPluginOptions = {
    key?: string;
    today?: boolean;
    yesterday?: boolean;
    week?: boolean;
    last7Days?: boolean;
    clients?: number[];
    tableName?: 'locationEvent' | 'user' | 'serviceProvider';
    tzOffset?: string;
    query?: any[];
    expression?: any[];
};

export type IPaginationRes<T> = PaginateResult<T>;

export interface IPaginationOptions extends mongoose.PaginateOptions {
    page?: number;
    limit?: number;
    pagination?: boolean;
}

//@ts-ignore
declare module 'express-session' {
    interface SessionData {
        user?: IAdminUserJSON;
    }
}

export type ISortType = 'asc' | 'desc';

export interface IPaginationQueryParams {
    page?: number | null;
    limit?: number | null;
}

export interface ISortQueryParams {
    sortField?: string;
    sortType?: ISortType | null;
}

export interface IFilterQueryParams {
    field: string;
    operator?: IFilterOperator;
    method?: IFilterMethod;
    value?: string | number | null | Date | boolean | Array<string | number | Date | boolean>;
    type?: 'string' | 'number' | 'date' | 'boolean';
}

export type IFilterMethod = 'regex' | 'is' | 'in' | 'gt' | 'lt' | 'gte' | 'lte' | 'ne';

export type IFilterOperator = 'or' | 'and';
