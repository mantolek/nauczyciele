export const validateEmail = (setError, email, setProcessing) => {
    const validation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!validation.test(email) || email === '' || email.length === 0) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
        return false;
    } else {
        setProcessing(true)
        return true;
    }
    
}