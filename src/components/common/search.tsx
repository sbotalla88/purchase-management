import { CloseIcon } from '@components/icons/close-icon';
import { SearchIcon } from '@components/icons/search-icon';
import cn from 'classnames';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

const classes = {
    root: 'ps-10 pe-8 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-blue-cta placeholder:text-blue-placeholder placeholder:font-normal text-base font-medium focus:outline-none',
    normal: 'bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent',
    solid: 'bg-gray-100 border border-border-100 focus:bg-light focus:border-accent',
    outline: 'border border-solid border-blue-placeholder focus:border-blue-cta focus:border-[3px]',
    shadow: 'focus:shadow',
};

export interface SearchProps {
    className?: string;
    shadow?: boolean;
    variant?: 'normal' | 'solid' | 'outline';
    inputClassName?: string;
    searchClass?: string;
    placeholder?: string;
    onSearch?: (data: SearchValue) => void;
    handleChange?: (data: SearchValue) => void;
    closeButtonClass?: string;
    //eslint-disable-next-line
    validationSchema?: any;
}

export interface SearchValue {
    searchText: string;
}

const Search: React.FC<SearchProps> = ({
    className,
    onSearch,
    variant = 'outline',
    shadow = false,
    inputClassName,
    placeholder,
    searchClass,
    handleChange,
    validationSchema = {},
    closeButtonClass,
    ...rest
}) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<SearchValue>({
        defaultValues: {
            searchText: '',
        },
    });
    const searchText = watch('searchText');
    const { t } = useTranslation();

    useEffect(() => {
        handleChange?.({ searchText: searchText });
    }, [searchText]);

    const rootClassName = cn(
        classes.root,
        {
            [classes.normal]: variant === 'normal',
            [classes.solid]: variant === 'solid',
            [classes.outline]: variant === 'outline',
        },
        {
            [classes.shadow]: shadow,
        },
        inputClassName
    );

    function clear() {
        reset();
        onSearch?.({ searchText: '' });
    }

    const handleSearchSubmit = useCallback(
        (value: SearchValue) => {
            onSearch?.(value);
        },
        [onSearch]
    );
    return (
        <form
            role="search"
            className={cn('w-full flex items-center relative', className)}
            onSubmit={handleSubmit(handleSearchSubmit)}
        >
            <label htmlFor="search" className="sr-only">
                {t('form:input-label-search')}
            </label>
            <div className="flex-1 flex-col relative">
                {!searchText && (
                    <button
                        className={cn(
                            `outline-none absolute right-1 focus:outline-none active:outline-none p-2 text-body`,
                            searchClass
                        )}
                    >
                        <SearchIcon stroke="#5476A6" className="w-5 h-5" />
                    </button>
                )}
                <input
                    type="text"
                    id="search"
                    {...register('searchText', validationSchema)}
                    className={rootClassName}
                    placeholder={placeholder || (t('form:input-placeholder-search') ?? '')}
                    aria-label="Search"
                    autoComplete="off"
                />
                {errors.searchText && (
                    <p className="my-2 text-xs text-start text-red-500"> {errors.searchText.message}</p>
                )}
                {!!searchText && (
                    <button
                        type="button"
                        onClick={clear}
                        className={cn(
                            'outline-none absolute end-1 focus:outline-none active:outline-none p-2 text-body',
                            closeButtonClass
                        )}
                    >
                        <CloseIcon stroke="#5476A6" className="w-5 h-5" />
                    </button>
                )}
            </div>
        </form>
    );
};

export default Search;
