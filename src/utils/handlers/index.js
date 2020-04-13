const handleError = (response) => {
    if(response.status === 504){
        alert('Internet error!');
    }else{
        alert('Internal server error!');
    }
};

export default handleError;
