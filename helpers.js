exports.registerHelpers = (hbs)=>{
    // HBS as une fonction registerHelper qui va transférer ça à Handlebars
    hbs.registerHelper("staticMap", ([lng,lat])=>
		`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=10&size=700x150&key=${process.env.KEY}&markers=color:purple%7C${lat},${lng}&scale=2`
    );
    
}