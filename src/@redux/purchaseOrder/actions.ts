import { snackAdd } from '../snacks/actions';
export const getPurchaseOrders =
    (query: IPurchaseOrder.GetQueryParams = {}) =>
    ({ axios }: ActionOptions) => ({
        type: '@purchaseOrder/GET',
        meta: {
            snack_error: { content: 'Failed to load purchase orders' },
        },
        payload: axios.get('purcahseOrder/search', { params: { ...query } }).then(({ data }) => {
            return data?.data ?? {};
        }),
    });

export const createPurchaseOrder =
    (query: IPurchaseOrder.CreateParams = {}) =>
    ({ axios, dispatch }: ActionOptions) => ({
        type: '@purchaseOrder/CREATE',
        meta: {},

        payload: axios
            .post('purcahseOrder/new', query)
            .then((res) => {
                dispatch(
                    snackAdd({
                        life: 5000,
                        severity: res.data.message ? 'warning' : 'success',
                        content: res.data.message ?? 'New purchase order has been added successfully',
                        closable: true,
                    })
                );
                return res?.data?.data ?? {};
            })
            .catch((error) => {
                throw error.response.data;
            }),
    });
