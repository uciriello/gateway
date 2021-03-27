const ER_CODE = {
	GENERIC: 500,
	UNKNOWN: 520,
	RECONNECTION: 523,
	ALREADY_CONNECTED: 233,
	ECONNRESET: 527,
	ECONNREFUSED: 527,
	OFFLINE: 521,
	UNAUTHORIZED: 401,
	INVALID_TOPIC: 400
};

const ER_TITLE = {
	GENERIC: 'Internal Server Error',
	UNKNOWN: 'Unknown Error',
	RECONNECTION: 'Reconnection',
	ALREADY_CONNECTED: 'Already Connected',
	ECONNRESET: 'Connection Reset',
	ECONNREFUSED: 'Connection Refused',
	OFFLINE: 'Service Unavailable',
	UNAUTHORIZED: 'Client Unauthorized',
	INVALID_TOPIC: 'Topic Invalid'
};

const ER_MSG = {
	GENERIC: 'Generic erorr',
	UNKNOWN: 'Empty, unknown, or unexplained response',
	RECONNECTION: "Cannot reach machine, service's trying to reconnect",
	ALREADY_CONNECTED: 'Another client is already connected, retry after disconnection',
	ECONNRESET: 'Service disconnected',
	ECONNREFUSED: 'Service disconnected',
	OFFLINE: 'Service appears to be offline',
	UNAUTHORIZED: 'Client is not authorized. Disconnecting',
	INVALID_TOPIC: 'The topic is invalid'
};

module.exports = {
	ER_CODE,
	ER_TITLE,
	ER_MSG
};
