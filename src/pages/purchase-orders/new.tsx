import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRedux } from '@redux/index';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { createPurchaseOrder } from '@redux/purchaseOrder/actions';
import dynamic from 'next/dynamic';
import { snackAdd } from '@redux/snacks/actions';
const Card = dynamic(() => import('@components/common/card'));
const Input = dynamic(() => import('@components/ui/input'));
const Button = dynamic(() => import('@components/ui/button'));
const CSVFile = dynamic(() => import('@components/ui/import-csv'));
const BackArrow = dynamic(() => import('@components/icons/back-arrow').then(({ BackArrow }) => BackArrow));
const AddIcon = dynamic(() => import('@components/icons/icon-add').then(({ AddIcon }) => AddIcon));
const EditIcon = dynamic(() => import('@components/icons/edit-icon').then(({ EditIcon }) => EditIcon));
const CloseIcon = dynamic(() => import('@components/icons/close-icon').then(({ CloseIcon }) => CloseIcon));
const DatePicker = dynamic(() => import('@components/ui/date-picker').then(({ DatePicker }) => DatePicker));

const CreateNewPurchaseOrderPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const purchaseOrderState = useRedux('purchaseOrder');
    const [vendor, setVendor] = useState<string>('');
    const [date, setDate] = useState<Date>(new Date());
    const [csv, setCSV] = useState<File | null>(null);
    const [csvTitle, setCSVTitle] = useState<string>('CSV');
    const [touched, setTouched] = useState<boolean>(false);
    const [errorName, setErrorName] = useState<string>('');
    const [errorDate, setErrorDate] = useState<string>('');
    const [errorCSV, setErrorCSV] = useState<string>('');
    const onAdd = async () => {
        setTouched(true);
        if (vendor.length === 0) {
            setErrorName('The vendor name is required.');
            return;
        } else if (!csv) {
            setErrorCSV('CSV is not selected.');
            return;
        }
        const formData = new FormData();
        formData.append('csv', csv as any);
        formData.append('vendor', vendor);
        formData.append('date', date as any);
        await dispatch(createPurchaseOrder(formData as any));
        setVendor('');
        setCSV(null);
        setCSVTitle('CSV');
    };

    const goBack = useCallback(() => {
        router.push('/purchase-orders');
    }, [router]);

    return (
        <>
            <Card className="bg-white !p-4 md:!px-10 !pt-1 !pb-5">
                <div className="flex gap-x-5 items-center">
                    <BackArrow className="cursor-pointer" onClick={goBack} />
                    <h3 className="w-full text-lg md:text-2xl font-medium text-blue-400">Adding New Date Template</h3>
                </div>
            </Card>
            <div className="py-7 px-4 md:px-10">
                <div className="flex flex-col mt-8 gap-x-12 gap-y-4">
                    <div className="flex-col w-full bg-white p-5 md:p-8 rounded-sm">
                        <Input
                            className="mt-4 mb-5 w-[100%] md:w-[50%]"
                            label="Vendor Name"
                            placeholder="Vendor name"
                            name="serviceKey"
                            rightIcon={<EditIcon width={'20px'} height={'20px'} />}
                            variant="base"
                            onChange={(e) => {
                                const pattern = /^[a-zA-Z0-9!@()_ ]*$/;
                                if (pattern.test(e?.target?.value) && e?.target?.value.length <= 25) {
                                    setTouched(true);
                                    setErrorName('');
                                    setVendor(e?.target?.value);
                                }
                            }}
                            value={vendor}
                            error={errorName}
                            touched={touched}
                        />
                    </div>
                    <div className="flex-col w-full bg-white p-5 md:p-8 rounded-sm">
                        <div className="text-accent mb-2 text-base font-medium">Date</div>
                        <div className="w-[100%] md:w-[50%] mb-4 rounded">
                            <DatePicker
                                name="date"
                                selected={date}
                                onChange={(value) => {
                                    setErrorDate('');
                                    setDate(new Date(moment(value as any).format('YYYY-MM-DD')));
                                }}
                                value={date.toDateString()}
                            />
                        </div>
                        {errorDate && <p className="my-2 text-xs text-start text-red-500">{errorDate}</p>}
                    </div>
                    <div className="flex-col w-full">
                        <div className="text-accent mb-2 text-base font-medium">Orders</div>
                        <CSVFile
                            title={csvTitle}
                            onDrop={(files: any) => {
                                setCSVTitle(files[0].path);
                                setCSV(files[0]);
                                setErrorCSV('');
                            }}
                        />
                        {errorCSV.length > 0 && <p className="my-2 text-xs text-start text-red-500">{errorCSV}</p>}
                    </div>
                    <div className="flex mt-4">
                        <Button className="add_schedule" size="medium" onClick={onAdd}>
                            <AddIcon circleFill={'transparent'} rectFill="#FFF" />
                            Add new purchase order
                        </Button>
                        <Button className="add_schedule ml-4" size="medium" onClick={goBack}>
                            Go Back
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateNewPurchaseOrderPage;
