/* * */

/* QR CODE GENERATOR: */
/* https://qrplanet.com/qr-code-generator-svg */

/* * */

export const SHORT_LINKS = Object.freeze([

	{
		_id: 'pip',
		destination: 'https://beta.carrismetropolitana.pt/pip/:id',
		path: '/pip/:id',
	},

	{
		_id: 'horario_pdf',
		destination: 'https://www.carrismetropolitana.pt/lines/:line/?active_waypoint_stop_id=:stop',
		path: '/horarios/:line/:direction/:stop',
	},

	{
		_id: 'campanha_contactos',
		destination: 'https://www.carrismetropolitana.pt/news/1234',
		path: '/campanha-contactos',
	},

]);
