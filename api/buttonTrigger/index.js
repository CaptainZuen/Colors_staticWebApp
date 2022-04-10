module.exports = async function (context, req) {

    // Haal de "color" variabele op
    const color = process.env.color;

    // Zet de "color" in een json als output
    context.res.json({
        color: color
    })
}