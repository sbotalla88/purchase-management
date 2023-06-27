declare namespace IPurchaseOrder {
    interface Payload {
        id: string;
        vendor?: string;
        date?: Date;
        csv?: any;
    }

    type State = StateWithArrayPayload<Payload>;

    interface CreateParams {
        vendor?: string;
        date?: Date;
        csv?: any;
    }

    interface GetQueryParams extends IPaginationQueryParams, ISortQueryParams {
        general?: string;
        vendor?: string;
    }
}
