var config = null

if (document.location.hostname == 'localhost'){

    config = {
        appEnv: 'dev',
        api: 'http://localhost:5000'
    }

}

else {

    config = {
        appEnv: 'dist',
        api: 'http://api.underwaterchess.com'
    }

}

export default config