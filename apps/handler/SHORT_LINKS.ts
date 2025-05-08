/* * */

/* QR CODE GENERATOR: */
/* https://qrplanet.com/qr-code-generator-svg */

/* * */

export const SHORT_LINKS = Object.freeze([

	/*
	 * path: 'origem' --> https://cmet.pt/origem
	 */

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
		_id: 'posters',
		destination: 'https://www.carrismetropolitana.pt/stops/:stop',
		path: '/posters/:stop',
	},

	{
		_id: 'campanha_contactos',
		destination: 'https://www.carrismetropolitana.pt/metrics#contactsMetrics',
		path: '/campanha-contactos',
	},

	{
		_id: 'arrabida_365',
		destination: 'https://www.carrismetropolitana.pt/arrabida365',
		path: '/arrabida365',
	},

	{
		_id: 'campanha_prioridade',
		destination: 'https://www.carrismetropolitana.pt',
		path: '/campanha-prioridade',
	},

]);
