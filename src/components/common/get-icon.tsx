type Props = {
    // eslint-disable-next-line
    iconList: any;
    iconName: string;
    [key: string]: unknown;
};

const getIcon = ({ iconList, iconName, ...rest }: Props) => {
    const TagName = iconList[iconName];
    return TagName ? <TagName {...rest} /> : <p className="text-sm text-red-500">{iconName} is not a valid icon</p>;
};

export default getIcon;
