import moment from 'moment-timezone';

export const formatDate = (date?: string) => {
    if (!date) {
        return new Date().toISOString();
    }
    return new Date(date).toISOString();
};

export const validateDate = (date: string|Date)=>{
    const formattedDate = new Date(date);
    return formattedDate instanceof Date;
}

