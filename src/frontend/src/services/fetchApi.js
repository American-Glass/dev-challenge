const HOST_ENV = process.env.REACT_APP_HOST;

const POST = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
    },
}

export const getData = async (text) => {
    const data = await fetch(`${HOST_ENV}/api/multiSearch`,
    {
        ...POST,

        body: JSON.stringify({
            text,
        })
    }).then(response => response.json()).then((data) => data);

    return data;
}