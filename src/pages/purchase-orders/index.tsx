import { useState, useEffect, useMemo, FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getPurchaseOrders } from '@redux/purchaseOrder/actions';
import { useRedux } from '@redux/index';
import moment from 'moment';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { Options } from 'react-select';
import { useRouter } from 'next/router';

const AddIcon = dynamic(() => import('@components/icons/icon-add').then(({ AddIcon }) => AddIcon));
const Table = dynamic(() => import('@components/ui/table').then(({ Table }) => Table));

const Button = dynamic(() => import('@components/ui/button'));
const Card = dynamic(() => import('@components/common/card'));
const TableCell = dynamic(() => import('@components/ui/table-cell'));
const Pagination = dynamic(() => import('@components/ui/pagination'));

const DateCell: FC<{ date: Date }> = ({ date }) => {
    return (
        <div className="flex flex-row items-center">
            <div className="mr-2">{moment.utc(date).format('MMM DD, YYYY')}</div>
        </div>
    );
};

const PurchaseOrderMgmtPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState<string>('');
    const [isDeletedSkipTemplateId, setIsDeletedSkipTemplateId] = useState<string>('');
    const [isLoader, setIsLoader] = useState<boolean>(true);
    const purchaseOrders = useRedux('purchaseOrder');
    const defaultSize = 10;

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        await dispatch(getPurchaseOrders());
    };
    console.log(purchaseOrders.data);

    const pagination = purchaseOrders.pagination;
    const en_US = {
        items_per_page: '/ page',
        jump_to: 'Go to',
        jump_to_confirm: 'confirm',
        page: '',
        prev_page: 'Previous Page',
        next_page: 'Next Page',
        prev_5: 'Previous 5 Pages',
        next_5: 'Next 5 Pages',
        prev_3: 'Previous 3 Pages',
        next_3: 'Next 3 Pages',
    };

    const handleChangePagination = useCallback(
        (page: number, pageSize: number) => {
            dispatch(
                getPurchaseOrders({
                    page: page,
                    limit: pageSize,
                })
            );
            isLoader && setIsLoader(false);
        },
        [searchText]
    );

    const columns = [
        {
            title: (
                <div className="pl-3 flex items-center">
                    <span>Vendor Name</span>
                </div>
            ),
            dataIndex: 'vendor',
            key: 'vendor',
            render: (vendor: string) => (
                <TableCell>
                    <p>{vendor}</p>
                </TableCell>
            ),
            align: 'left',
            width: '30%',
        },
        {
            title: (
                <div className="pl-3 flex items-center">
                    <span>Date</span>
                </div>
            ),
            dataIndex: 'date',
            key: 'date',
            render: (date: Date) => (
                <TableCell>
                    <DateCell date={date} />
                </TableCell>
            ),
            align: 'left',
            width: '40%',
        },
        {
            title: (
                <div className="pl-3 flex items-center">
                    <span>Orders</span>
                </div>
            ),
            dataIndex: 'orders',
            key: 'orders',
            render: (orders: any[], _: any, index: number) => <TableCell>{orders.length}</TableCell>,
            align: 'left',
            width: '40%',
        },
    ];

    return (
        <>
            <Card className="bg-white !p-4 md:!px-10 !pt-1 !pb-5">
                <div className="flex flex-row justify-between items-center">
                    <h3 className="w-full text-lg md:text-2xl font-medium text-blue-400">Purchase Order Management</h3>
                    <Button
                        className="add_date_template"
                        size="medium"
                        onClick={() => {
                            router.push({
                                pathname: '/purchase-orders/new/',
                            });
                        }}
                    >
                        <AddIcon circleFill={'transparent'} rectFill="#FFF" />
                        Add New
                    </Button>
                </div>
            </Card>
            <div className="py-7 px-4 md:px-10">
                <div className="mt-5">
                    <Table
                        tableLayout="fixed"
                        columns={columns as any}
                        emptyText="No data found"
                        data={purchaseOrders.data}
                        rowKey="id"
                        scroll={{ x: 500 }}
                        sticky={true}
                        className="matrix general-table"
                        onHeaderRow={() => ({
                            className: 'header-title',
                        })}
                    />
                    {pagination && Object.keys(pagination).length && (
                        <div className="flex justify-end items-center mb-4">
                            <Pagination
                                total={pagination?.totalDocs}
                                current={pagination?.page}
                                pageSize={pagination?.limit ?? defaultSize}
                                onChange={handleChangePagination}
                                locale={en_US}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default PurchaseOrderMgmtPage;
