export function onWrite(inputs){
        let values = document.querySelectorAll('input');
        let loginInfo={
            'user':values[0].value,
            'password':values[1].value
        }
        return loginInfo;
}