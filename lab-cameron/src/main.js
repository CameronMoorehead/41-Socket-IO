'use strict';

import { start } from './lib/server.js';

const server = start({ PORT: process.env.PORT, MONGODB_URI: process.env.MONGODB_URI });
