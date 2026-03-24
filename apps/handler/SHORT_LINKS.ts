/* * */

/* * */

export const SHORT_LINKS = Object.freeze([

	/**
	 * INSTRUÇÕES:
	 * É necessário definir um ID único para cada short-link (tipo ID da campanha).
	 * Este é o ID que irá aparecer nas analíticas do site.
	 * O campo 'destination' é o URL completo de destino. Pode ser qualquer URL, interno ou externo.
	 * O campo 'path' é o sufixo que será adicionado ao domínio cmet.pt, e será esse o URL a colocar no QR Code.
	 *
	 * Exemplo:
	 * {
	 *   _id: 'alteracoes-rede-loures',
	 *   destination: 'https://um-link-qualquer.com/etc-etc',
	 *   path: '/loures', --> https://cmet.pt/loures (este é o URL a colocar no QR Code)
	 * }
	 *
	 * Quem aceder a "https://cmet.pt/loures" será automaticamente redirecionado para "https://um-link-qualquer.com/etc-etc",
	 * e o contador de visitas para o ID 'alteracoes-rede-loures' será incrementado nos relatórios de analíticas.
	 */

	/**
	 * QR CODE GENERATOR:
	 * Este site é recomendado para gerar QR Codes
	 * a partir dos URLs curtos criados:
	 *
	 * => https://qrplanet.com/qr-code-generator-svg
	 *
	 * Para utlizações digitais, o "Level L" é suficiente (alto nível de correção de erros).
	 * Para impressão, recomenda-se o "Level H" (muito alto nível de correção de erros).
	 * A correção de erros é importante para garantir que o QR Code permanece legível
	 * mesmo que parte do código fique danificada ou tapada
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
		_id: 'bilboards',
		destination: 'https://www.carrismetropolitana.pt/stops/:stop',
		path: '/bilboards/:stop',
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

	{
		_id: 'app_inbus',
		destination: 'https://www.carrismetropolitana.pt/app',
		path: '/app-install-cmm',
	},

	{
		_id: 'spotify',
		destination: 'https://open.spotify.com/playlist/2wFT6kk4MMT3jV32YAhkju',
		path: '/spotify',
	},

	{
		_id: 'urban-vind-instructions',
		destination: 'https://bit.ly/cfx-install',
		path: '/urban-vind',
	},

	{
		_id: 'maratona_loures',
		destination: 'https://carrismetropolitana.pt/news/34053',
		path: '/maratona-loures',
	},

	{
		_id: 'quiz_emoji',
		destination: 'https://carrismetropolitana.pt/quiz',
		path: '/quiz',
	},

	{
		_id: 'retrospectiva-2025',
		destination: 'https://carrismetropolitana.pt/retrospectiva-2025',
		path: '/retrospectiva-2025',
	},

	{
		_id: 'inquérito_2025',
		destination: 'https://carrismetropolitana.pt/news/inquerito-de-satisfa%C3%A7ao-ao-passageiro',
		path: '/resultados-inquerito-2025',
	},
	
	{
		_id: 'Tap&Ride',
		destination: 'https://carrismetropolitana.pt/news/Tap-and-Ride',
		path: '/tap-and-ride',
	},

]);
