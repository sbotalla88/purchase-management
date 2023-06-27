declare type Pagination = {
    totalDocs?: number;
    limit?: number;
    totalPages?: number;
    page?: number;
    pagingCounter?: number;
    hasPrevPage?: boolean;
    hasNextPage?: boolean;
    prevPage?: number;
    nextPage?: number;
};

declare type DefaultState<DataType> = {
    isInitLoading?: boolean;
    isLoading?: boolean;
    isDeleting?: boolean;
    isUpdating?: boolean;
    isCreating?: boolean;
    pagination?: Pagination;
    data?: DataType;
};

declare type StateWithArrayPayload<D> = DefaultState<D[]>;

declare type StateWithObjectPayload<D> = DefaultState<D>;

declare type ReducerOptions = {
    flushOnError?: boolean;
    flushOnStart?: boolean;
};

declare type ResponseWithPagination<DataType> = Pagination & {
    data: DataType[];
};

declare type DataWithPagination<Data> = {
    data: Data;
    pagination?: Pagination;
};

declare type ActionOptions = {
    axios: import('axios').AxiosInstance;
    dispatch: import('redux').Dispatch;
};
