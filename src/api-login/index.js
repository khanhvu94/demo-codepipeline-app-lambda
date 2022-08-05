'use strict';

exports.handler = async (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    //let responseInfo = null;
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
            status: "Ok"
        }),
    };
};
