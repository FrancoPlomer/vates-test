const fetchConfig = async( endpoint ,props ) => {
    
    const {  method = 'GET', ...otherProps } = props;

    const response = await fetch(endpoint, {
        method,
        ...otherProps
    });
    
    return response; 
}

export default fetchConfig;