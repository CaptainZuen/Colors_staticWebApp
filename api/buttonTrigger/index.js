module.exports = async function (context, req) {
    // context.log('JavaScript HTTP trigger function processed a request.');

    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    const color = process.env.color;
    context.log(color);

    let r = parseInt((color[0]+color[1]), 16);
    let g = parseInt((color[2]+color[3]), 16);
    let b = parseInt((color[4]+color[5]), 16);

    context.res.json({
        // status: 200, /* Defaults to 200 */
        r: r,
        g: g,
        b: b
    });
}