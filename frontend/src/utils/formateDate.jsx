export const formateDate=(date,config)=>{
    const defaultOptions={day:"numeric",month:"short",year:"numeric"};
    const options=config?config:defaultOptions;

    return new DataTransfer(date).toLocalDateString("en-US",options);
};