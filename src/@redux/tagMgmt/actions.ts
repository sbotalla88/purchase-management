import { IServerSideGetRowsParams } from 'ag-grid-community';
import { generateFilterQuery } from '@utils/generateFilterQuery';
import { generateSortQuery } from '@utils/generateSortQuery';

export const getTags =
    (query: ITag.GetQueryParams = {}) =>
    ({ axios }: ActionOptions) => ({
        type: '@tagMgmt/GET',
        meta: {
            // snack_success: { content: 'Successfully loaded vendor accounts' },
            snack_error: { content: 'Failed to load tags' },
        },
        payload: axios.get('tags/getTags', { params: { ...query } }).then(({ data }) => {
            return data?.data ?? {};
        }),
    });

export const getTagsV2 =
    (params: IServerSideGetRowsParams, additional: any = {}) =>
    ({ axios }: ActionOptions) => {
        const limit = params.api.paginationGetPageSize() ?? 10;
        const page = (params.request.startRow ?? 0) / limit + 1;
        const sorters = generateSortQuery(params.request.sortModel);
        const filters = generateFilterQuery(params.request.filterModel);
        if (!sorters.find((e) => e.sortField === 'updated')) {
            sorters.push({
                sortField: 'updatedAt',
                sortType: 'desc',
            });
        }
        const query: IJobHistory.GetQueryParams = {
            page,
            limit,
            filters,
            sorters: [...sorters],
            ...additional,
        };

        return {
            type: '@tagMgmt/GET',
            meta: {
                snack_error: { content: 'Failed to load employees' },
            },
            payload: axios.post('tags/getTagsV2', { ...query }).then(({ data }) => {
                return data?.data ?? {};
            }),
        };
    };

export const createTag =
    (query: ITag.CreateParams = {}) =>
    ({ axios }: ActionOptions) => ({
        type: '@tagMgmt/CREATE',
        meta: {
            snack_success: {
                content: 'Tag created successfully.',
            },

            // snack_error: {
            //     content: "We couldn't create new vendor account.",
            // },
        },

        payload: axios
            .post('tags/addTag', { data: { ...query } })
            .then((res) => {
                return res?.data?.data ?? {};
            })
            .catch((error) => {
                throw error.response.data;
            }),
    });

export const updateTag =
    (id: string, query: ITag.CreateParams = {}) =>
    ({ axios }: ActionOptions) => ({
        type: '@tagMgmt/UPDATE',
        meta: {
            snack_success: {
                content: 'Tag updated successfully.',
            },

            snack_error: {
                content: "We couldn't update the tag.",
            },
        },

        payload: axios
            .post(`tags/update`, { data: { ...query }, id })
            .then((res) => {
                return res?.data?.data;
            })
            .catch((error) => {
                throw error.response.data;
            }),
    });

export const archiveTag =
    (id: string, query: ITag.CreateParams = {}) =>
    ({ axios }: ActionOptions) => ({
        type: '@tagMgmt/ARCHIVE',
        meta: {
            snack_success: {
                content: `Tag ${query.isDelete ? 'archived' : 'unarchived'} successfully.`,
            },

            snack_error: {
                content: "We couldn't archive the tag.",
            },
        },

        payload: axios
            .post(`tags/update`, { data: { ...query }, id })
            .then((res) => {
                return res?.data?.data;
            })
            .catch((error) => {
                throw error.response.data;
            }),
    });
