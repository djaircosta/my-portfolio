import axios from 'axios'

export const save = (data) => {
    const config = {
        method: 'post',
        url: "https://sheet.best/api/sheets/b3a7297c-ebe4-4c17-bc2d-919cc1dbb96b",
        headers: {
            "Content-Type": "application/json",
        },
        data
    };

    console.log("spreadsheet config", config)

    return axios(config)
        .then(res => {
            console.log("Dados da planilha", res)
            return true
        })
        .catch(err => {
            console.log(err)
            return false
        })
}
